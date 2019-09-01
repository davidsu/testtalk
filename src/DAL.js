const _ = require('lodash')
const state = require('./state')

function setByPath(path, value) {
    _.set(state, path, value)
}
function getByPath(path, default = {}) {
    _.get(state, path)
}
module.exports = {
    setByPath,
    getByPath
}

