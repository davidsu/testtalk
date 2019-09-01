import DAL from '../src/DAL'
import _ from 'lodash'
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
