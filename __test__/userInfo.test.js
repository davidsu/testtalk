import {assign} from 'lodash'
import { getCurrentUser, setCurrentUser } from '../src/userInfo.js'
describe('userInfo', () => {
  it('should get/set currentUser', () => {
    const currentUser = { name: "Assaf Gannon", mail: "assaf.gannon@walkme.com" }
    setCurrentUser(currentUser)
    const expected = {realMail: 'assafgannon@walkme.com', ...currentUser}
    expect(getCurrentUser()).toEqual(expected)
  })
})
