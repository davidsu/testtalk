import _ from 'lodash'
let state = {}

function setByPath(path, value) {
  _.set(state, path, value)
}
function getByPath(path, defaultValue = {}) {
  return _.get(state, path, defaultValue)
}
const runTimeDal = {
  setByPath,
  getByPath
}
export default runTimeDal
