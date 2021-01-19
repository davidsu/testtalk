import _ from 'lodash'
import userInfo from '../src/userInfo'
export default () => {
  let currentUser = { 
    mail: 'dumm.y@mail.com', 
    name: 'dummy', 
    // realMail: 'dummy@mail.com'
  }
  const testKit =  {
    withCurrentUser: user => {
      currentUser = {...currentUser, ...user}
      currentUser = _.pick(currentUser, ['mail', 'name'])
      // currentUser = _.pick(currentUser, ['mail', 'name', 'realMail'])
    },
    build: () => {
      return { currentUser }
    }
  }
  return testKit
}
