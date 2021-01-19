import testkit from './app.testkit.js'

describe('getCurrentUser', () => {
  it('should set application state when current user is veryImportant', () => {
    const {setVeryImportantUserState, DAL} = testkit()
      .withCurrentUser({ mail: 'assaf.gannon@walkme.com', name: 'Assaf Gannon' })
      .build()
    setVeryImportantUserState()
    expect(DAL.getByPath('importantUser')).toBeTruthy()
  })

  it('should throw for user that is not very important', () => {
    const {setVeryImportantUserState} = testkit().build()
    expect(setVeryImportantUserState).toThrow("dummy can't be important!!!")
  })
})
