import testkit from './app.testkit.js'
describe('userInfo', () => {
    it('should get current user', () => {
        const {userInfo} = testkit()
                            .withCurrentUser({mail: 'a@b.com'})
                            .build()
        expect(userInfo.getCurrentUser()).toEqual({mail: 'a@b.com', name: 'dummy'})
        // expect(userInfo.getUser()).toEqual({mail: 'a@b.com', name: 'dummy'})
        // expect(userInfo.getUser()).toEqual({mail: 'a@b.com', name: 'dummy', realMail: 'dummy@mail.com'})
    })
    it('should get current user after setting it', () => {
        const {userInfo} = testkit().build()
        const user = {mail: 'some.user+1@b.com', name: 'mocked'}
        userInfo.setCurrentUser(user)
        expect(userInfo.getCurrentUser()).toEqual(user)
        // expect(userInfo.getUser()).toEqual(user)
        // expect(userInfo.getUser()).toEqual({realMail: 'someuser@b.com', ...user})
    })
})
