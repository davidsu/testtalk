import _ from 'lodash'
export default appTestKit => {
  let currentUser = { 
    mail: 'dumm.y@mail.com', 
    name: 'dummy', 
    realMail: 'dummy@mail.com'
  }
  const testKit =  {
    withCurrentUser: user => {
      currentUser = {...currentUser, ...user}
      currentUser = _.pick(currentUser, ['mail', 'name'])
      // currentUser = _.pick(currentUser, ['mail', 'name', 'realMail'])
      return testKit
    },
    build: () => ({ currentUser })
  }
  return testKit
}
