import veryImportantFactory from '../src/veryImportantStuff'
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
    beforeEach(() => state = {})
    it('should set importantUser', () => {
        currentUser = { mail: 'eli.b@walkme.com', name: 'Eli Blitz' }
        const importantStuff = veryImportantFactory(mockUserInfo, mockDAL)
        importantStuff.setVeryImportantUserState()
        expect(state).toEqual({importantUser: true})
    })

    it('should throw for user that is not very important', () => {
        currentUser = { mail: 'dummy@walkme.com', name: 'dummy' }
        const importantStuff = veryImportantFactory(mockUserInfo, mockDAL)
        expect(importantStuff.setVeryImportantUserState).toThrow('dummy is not important')
    })
})
