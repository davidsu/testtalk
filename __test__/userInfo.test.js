import DALfactory from '../src/DAL'
import userInfoFactory from '../src/userInfo'
describe('userInfo', () => {
  it('should set/get current user', () => {
    const currentUser = { mail: 'mock+1@walkme.com', name: 'mock' }
    const DAL = DALfactory({})
    const userInfo = userInfoFactory(DAL)
    userInfo.setCurrentUser(currentUser)
    expect(userInfo.getCurrentUser()).toEqual(currentUser)
    // expect(userInfo.getUser()).toEqual({realMail: 'mock@walkme.com', ...currentUser})
  })
})
