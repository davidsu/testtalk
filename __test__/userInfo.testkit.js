const userInfo = require('../src/userInfo')
const DAL = require('./DAL.testkit.js')
const _ = require('lodash')
module.exports = (DALtestKit = DAL()) => {
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
        build: (DAL = DALtestKit.build()) => userInfo(DAL)
    }
    return testKit
}
