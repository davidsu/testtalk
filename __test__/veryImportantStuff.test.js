//lets mock only the application state
//in a real world application this isn't feasible because many of the dependencies won't work on testTime and need mocking
//our test doesn't have to know how to mock everything so the application will load
import { setVeryImportantUserState } from '../src/veryImportantStuff'
import DAL from '../src/DAL'
import * as userInfo from '../src/userInfo'
describe('getCurrentUser', () => {
    it('should set application state when current user is veryImportant', () => {
        const currentUser = { mail: 'eli.b@walkme.com', name: 'Eli Blitz' }
        DAL.resetState({currentUser})
        setVeryImportantUserState()
        expect(DAL.getByPath('importantUser')).toBeTruthy()
    })

    it('should throw for user that is not very important', () => {
        const currentUser = { mail: 'dummy@walkme.com', name: 'dummy' }
        DAL.resetState({currentUser})
        expect(setVeryImportantUserState).toThrow('dummy is not important')
    })
})
