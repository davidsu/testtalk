import { getCurrentUser, setCurrentUser } from '../src/userInfo'
describe('userInfo', () => {
    it('should set/get current user', () => {
        const currentUser = { mail: 'mock+1@walkme.com', name: 'mock' }
        setCurrentUser(currentUser)
        expect(getCurrentUser()).toEqual(currentUser)
    })
})
