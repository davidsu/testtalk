import testkit from './app.testkit.js'

describe('getCurrentUser', () => {
    it('should set application state when current user is veryImportantFactory important', () => {
        const {veryImportantStuff, DAL} = testkit()
            .withCurrentUser({ mail: 'eli.b@walkme.com', name: 'Eli Blitz' })
            .build()
        veryImportantStuff.setVeryImportantUserState()
        expect(DAL.getByPath('importantUser')).toBeTruthy()
    })
})
