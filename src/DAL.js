import _ from 'lodash'

export default state => {
    function setByPath(path, value) {
        _.set(state, path, value)
    }
    function getByPath(path, defaultValue = {}) {
        return _.get(state, path, defaultValue)
    }
    return {
        setByPath,
        getByPath
    }
}
