import _ from 'lodash'
import userInfo from '../src/userInfo'
export default appTestKit => {
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
            return testKit
        },
        build: () => {
            appTestKit.withData({currentUser})
            return userInfo(appTestKit.DAL)
        }
    }
    return testKit
}
