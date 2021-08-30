import DAL from '../src/DAL'
import _ from 'lodash'
export default () => {
  const data = {}
  const testKit =  {
    withData: moreData => {
      _.merge(data, moreData)
      return testKit
    },
    build: () => data
  }
  return testKit
}
