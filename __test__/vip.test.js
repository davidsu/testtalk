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
  it('should enter vip area', () => {
    currentUser = { mail: 'david.susskind@walkme.com', name: 'David Susskind' }
    const vip = vipFactory(mockUserInfo, mockDAL)
    vip.enter()
    expect(state).toEqual({isVip: true})
  })

  it('should throw for user that is not very important', () => {
    currentUser = { mail: 'dummy@walkme.com', name: 'dummy' }
    const vip = vipFactory(mockUserInfo, mockDAL)
    expect(vip.enter).toThrow('dummy is BORING!!!')
  })
})
