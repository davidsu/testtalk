import testkit from './app.testkit.js'

describe('getCurrentUser', () => {
  it('should set application state when current user is veryImportant', () => {
    const {vip, DAL} = testkit()
      .withCurrentUser({ mail: 'eli.b@walkme.com', name: 'Eli Blitz' })
      .build()
    vip.enter()
    expect(DAL.getByPath('isVip')).toBeTruthy()
  })

  it('should throw for user that is not very important', () => {
    const {vip} = testkit().build()
    expect(vip.enter).toThrow('dummy is BORING!!!')
  })
})
