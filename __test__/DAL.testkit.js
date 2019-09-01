const DAL = require('../src/DAL')
const _ = require('lodash')
const state = {}
module.exports = () => {
    const data = {}
    const testKit =  {
        with: {
            data: moreData => {
                _.merge(data, moreData)
                return testKit
            }
        },
        build: () => DAL(data)
    }
    return testKit
}
