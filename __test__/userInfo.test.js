const DALfactory = require('../src/DAL')
const userInfoFactory = require('../src/userInfo')
describe('userInfo', () => {
    it('should set/get current user', () => {
        currentUser = { mail: 'mock+1@walkme.com', name: 'mock' }
        const DAL = DALfactory({})
        const userInfo = userInfoFactory(DAL)
        userInfo.setCurrentUser(currentUser)
        expect(userInfo.getCurrentUser()).toEqual(currentUser)
    })
})
