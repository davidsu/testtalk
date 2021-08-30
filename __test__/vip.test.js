import vipFactory from '../src/vip'
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
        currentUser = { mail: 'david.susskind@walkme.com', name: 'David Susskind' }
        const vip = vipFactory(mockUserInfo, mockDAL)
        vip.set()
        expect(state).toEqual({importantUser: true})
    })

    it('should throw for user that is not very important', () => {
        currentUser = { mail: 'dummy@walkme.com', name: 'dummy' }
        const importantStuff = vipFactory(mockUserInfo, mockDAL)
        expect(importantStuff.set).toThrow('dummy is not important')
    })
})
