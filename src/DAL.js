const _ = require('lodash')
const state = require('./state')

function setByPath(path, value) {
    _.set(state, path, value)
}
function getByPath(path, defaultValue = {}) {
    return _.get(state, path, defaultValue)
}
module.exports = {
    setByPath,
    getByPath
}

