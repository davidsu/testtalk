describe('getCurrentUser', () => {
  let currentUser;
  let state = {}
  let setVeryImportantUserState
  beforeEach(() => {
    state = {}
    jest.doMock('../src/DAL.js', () => ({
      getByPath: () => state,
      setByPath: (path, value) => state[path] = value,
    }))
    jest.doMock('../src/userInfo.js', () => ({
      getCurrentUser: () => currentUser
    }))
    jest.resetModules()
    setVeryImportantUserState = require('../src/veryImportantStuff').setVeryImportantUserState
  })
  it('should set importantUser', () => {
    currentUser = { name: "Assaf Gannon", mail: "assaf.gannon@walkme.com" }
    setVeryImportantUserState()
    expect(state).toEqual({importantUser: true})
  })

  it('should throw for user that is not very important', () => {
    currentUser = { name: "dummy", mail: "dummy@walkme.com" }
    expect(setVeryImportantUserState).toThrow( `${currentUser.name} can't be important!!!`)
  })
})
