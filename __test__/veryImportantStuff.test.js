//lets mock only the application state
//in a real world application this isn't feasible because many of the dependencies won't work on testTime and need mocking
//our test doesn't have to know how to mock everything so the application will load
import testkitFactory from'./veryImportantStuff.testkit'

describe('getCurrentUser', () => {
    it('should set application state when current user is veryImportantFactory important', () => {
        const {veryImportantStuff, DAL} = testkitFactory()
            .with.currentUser({ mail: 'eli.b@walkme.com', name: 'Eli Blitz' })
            .build()
        veryImportantStuff.setVeryImportantUserState()
        expect(DAL.getByPath('importantUser')).toBeTruthy()
    })
})
