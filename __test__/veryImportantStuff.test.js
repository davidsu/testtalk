import testkit from './app.testkit.js'

describe('getCurrentUser', () => {
    it('should set application state when current user is veryImportant', () => {
        const {veryImportantStuff, DAL} = testkit()
            .withCurrentUser({ mail: 'eli.b@walkme.com', name: 'Eli Blitz' })
            .build()
        veryImportantStuff.setVeryImportantUserState()
        expect(DAL.getByPath('importantUser')).toBeTruthy()
    })

    it('should throw for user that is not very important', () => {
        const {veryImportantStuff} = testkit().build()
        expect(veryImportantStuff.setVeryImportantUserState).toThrow('dummy is not important')
    })
})
