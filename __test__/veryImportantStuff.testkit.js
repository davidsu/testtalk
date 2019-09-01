import veryImportantStuff from '../src/veryImportantStuff'
import userInfo from './userInfo.testkit'
import _ from 'lodash'
module.exports = () => {
    const userInfoTestKit = userInfo()
    const testKit =  {
        with: {
            currentUser: user => {
                userInfoTestKit.with.currentUser(user)
                return testKit
            }
        },
        build: () => {
            const {userInfo, DAL} = userInfoTestKit.build()
            return {
                veryImportantStuff: veryImportantStuff(userInfo, DAL),
                DAL
            }
        }
    }
    return testKit
}
