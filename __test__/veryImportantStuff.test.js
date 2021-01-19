import { setVeryImportantUserState } from '../src/veryImportantStuff'
import runTimeDal from '../src/DAL'
import * as userInfo from '../src/userInfo'
let currentUser;
let state = {}
const mockUserInfo = {
    getCurrentUser: () => currentUser,
}
const mockDAL = {
    setByPath: (path, value) => state[path] = value,
    getByPath: () => state
}
describe('getCurrentUser', () => {
    beforeEach(() => {
        state = {}
        jest.spyOn(userInfo, 'getCurrentUser').mockImplementation(() => currentUser)
        jest.spyOn(runTimeDal, 'setByPath').mockImplementation((path, value) => state[path] = value)
    })
    it('should set importantUser', () => {
        currentUser = { mail: 'eli.b@walkme.com', name: 'Eli Blitz' }
        setVeryImportantUserState()
        expect(state).toEqual({importantUser: true})
    })

    it('should throw for user that is not very important', () => {
        currentUser = { mail: 'dummy@walkme.com', name: 'dummy' }
        expect(setVeryImportantUserState).toThrow('dummy is not important')
    })
})
