const factory = require('../src/veryImportantStuff')
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
    it('should return empty user when not loggedin', () => {
        currentUser = { mail: 'eli.b@walkme.com', name: 'Eli Blitz' }
        const importantStuff = factory(mockUserInfo, mockDAL)
        importantStuff.setVeryImportantUserState()
        expect(state).toEqual({importantUser: true})
    })
})
