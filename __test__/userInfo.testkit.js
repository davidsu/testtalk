import _ from 'lodash'
import userInfo from '../src/userInfo'
export default (appTestKit) => {
    let currentUser = { 
        mail: 'dumm.y@mail.com', 
        name: 'Dummy User', 
        // realMail: 'dummy@mail.com'
    }
    const testKit =  {
        withCurrentUser: user => {
            currentUser = {...currentUser, ...user}
            currentUser = _.pick(currentUser, ['mail', 'name'])
            // currentUser = _.pick(currentUser, ['mail', 'name', 'realMail'])
            appTestKit.withData({currentUser})
            return testKit
        },
        build: () =>  userInfo(appTestKit.DAL)
    }
    return testKit
}
