import veryImportantStuff from '../src/veryImportantStuff'
import _ from 'lodash'
module.exports = (appTestKit) => {
    const testKit =  {
        with: {
            currentUser: user => {
                appTestKit.withCurrentUser(user)
                return testKit
            }
        },
        build: () => veryImportantStuff(appTestKit.userInfo, appTestKit.DAL)
    }
    return testKit
}
