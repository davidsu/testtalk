//lets mock only the application state
//in a real world application this isn't feasible because many of the dependencies won't work on testTime and need mocking
//our test doesn't have to know how to mock everything so the application will load
import veryImportantFactory from '../src/veryImportantStuff'
import userInfoFactory from '../src/userInfo'
import DALfactory from '../src/DAL'

describe('getCurrentUser', () => {
    it('should set application state when current user is veryImportant', () => {
        const currentUser = { mail: 'eli.b@walkme.com', name: 'Eli Blitz' }
        const DAL = DALfactory({currentUser})
        const importantStuff = veryImportantFactory(userInfoFactory(DAL), DAL)
        importantStuff.setVeryImportantUserState()
        expect(DAL.getByPath('importantUser')).toBeTruthy()
    })

    it('should throw for user that is not very important', () => {
        const currentUser = { mail: 'dummy@walkme.com', name: 'dummy' }
        const DAL = DALfactory({currentUser})
        const importantStuff = veryImportantFactory(userInfoFactory(DAL), DAL)
        expect(importantStuff.setVeryImportantUserState).toThrow('dummy is not important')
    })
})
