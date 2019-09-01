const UserInfotestKit = require('./userInfo.testkit.js')
describe('userInfo', () => {
    it('should get current user', () => {
        const userInfo = UserInfotestKit()
                            .with.currentUser({mail: 'baba'})
                            .build()
        expect(userInfo.getCurrentUser()).toEqual({mail: 'baba', name: 'Dummy User'})
    })
})
