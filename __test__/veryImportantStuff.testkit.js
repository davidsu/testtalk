const veryImportantStuff = require('../src/veryImportantStuff')
const userInfo = require('./userInfo.testkit')
const _ = require('lodash')
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
