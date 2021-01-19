import testkit from './app.testkit.js'
import { setCurrentUser, getCurrentUser } from '../src/userInfo'
describe('userInfo', () => {
  it('should get current user', () => {
    testkit()
      .withCurrentUser({mail: 'a@b.com'})
      .build()
    expect(getCurrentUser()).toEqual({mail: 'a@b.com', name: 'dummy'})
    // expect(getCurrentUser()).toEqual({mail: 'a@b.com', name: 'dummy', realMail: 'dummy@mail.com'})
  })
  it('should get current user after setting it', () => {
    testkit().build()
    const user = {mail: 'some.user+1@b.com', name: 'mocked'}
    setCurrentUser(user)
    expect(getCurrentUser()).toEqual(user)
    // expect(getCurrentUser()).toEqual({realMail: 'someuser@b.com', ...user})
  })
})
