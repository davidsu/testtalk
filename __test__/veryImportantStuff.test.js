//lets mock only the application state
//in a real world application this isn't feasible because many of the dependencies won't work on testTime and need mocking
//our test doesn't have to know how to mock everything so the application will load
const veryImportantFactory = require('../src/veryImportantStuff')
const userInfoFactory = require('../src/userInfo')
const DALfactory = require('../src/DAL')

jest.mock('../src/state', () => ({
    currentUser: { mail: 'eli.b@walkme.com', name: 'Eli Blitz' }
}))
describe('getCurrentUser', () => {
    it('should set application state when current user is veryImportantFactory important', () => {
        currentUser = { mail: 'eli.b@walkme.com', name: 'Eli Blitz' }
        const DAL = DALfactory({currentUser})
        const importantStuff = veryImportantFactory(userInfoFactory(DAL), DAL)
        importantStuff.setVeryImportantUserState()
        expect(DAL.getByPath('importantUser')).toBeTruthy()
    })
})
