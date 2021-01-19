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
if(process.env.TEST) {
  runTimeDal.resetState = initialState => state = initialState
}
export default runTimeDal
