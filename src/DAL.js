import _ from 'lodash'
let state = {}

function setByPath(path, value) {
  _.set(state, path, value)
}
function getByPath(path, defaultValue = {}) {
  return _.get(state, path, defaultValue)
}
const DAL = {
  setByPath,
  getByPath
}
export default DAL
