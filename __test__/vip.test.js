import testkit from './app.testkit.js'

describe('getCurrentUser', () => {
  it('should set application state when current user is interesting', () => {
    const {vip, DAL} = testkit()
      .withCurrentUser({ mail: 'david.susskind@walkme.com', name: 'David Susskind' })
      .build()
    vip.enter()
    expect(DAL.getByPath('isVip')).toBeTruthy()
  })

  it('should be vip', () => {
    const {vip, DAL} = testkit()
      .withCurrentUser({ mail: 'david.susskind@walkme.com', name: 'David Susskind' })
      .withIsVip()
      .build()
    expect(vip.isVip()).toBeTruthy()
  })

  it('should throw for user that is not very interesting', () => {
    const {vip} = testkit().build()
    expect(vip.enter).toThrow('dummy is BORING!!!')
  })
})
