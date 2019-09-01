const userInfo = require('../src/userInfo')
const DAL = require('./DAL.testkit.js')
const _ = require('lodash')
module.exports = () => {
    const DALtestKit = DAL()
    let currentUser = { mail: 'dummy@mail.com', name: 'Dummy User' }
    const testKit =  {
        with: {
            currentUser: user => {
                currentUser = {...currentUser, ...user}
                currentUser = _.pick(currentUser, ['mail', 'name'])
                DALtestKit.with.data({currentUser})
                return testKit
            }
        },
        build: () => {
            const DAL = DALtestKit.build()
            return  {
                userInfo: userInfo(DAL),
                DAL
            }
        }
    }
    return testKit
}
