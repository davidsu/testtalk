const veryImportantStuff = require('../src/veryImportantStuff')
const DAL = require('./DAL.testkit')
const userInfo = require('./userInfo.testkit')
const _ = require('lodash')
module.exports = () => {
    const DALtestkit = DAL()
    const userInfoTestKit = userInfo(DALtestkit)
    const testKit =  {
        with: {
            currentUser: user => {
                userInfoTestKit.with.currentUser(user)
                return testKit
            }
        },
        build: () => {
            const DAL = DALtestkit.build()
            const userInfo = userInfoTestKit.build(DAL)
            return {
                veryImportantStuff: veryImportantStuff(userInfo, DAL),
                DAL
            }
        }
    }
    return testKit
}
