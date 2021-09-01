import _ from 'lodash'
import DALTKFactory from './DAL.testkit'
import vipTestkitFactory from './vip.testkit'
import userInfoTKFactory from './userInfo.testkit'
import app from '../src/app'

const combineTestkits = (allTestkits, testkit) => {
  const additions = {}
  for(const kit of Object.values(allTestkits)) {
    _.forOwn(kit, (val, key) => {
      if(typeof val === 'function') {
        additions[key] = (...args) => {
          val(...args)
          return testkit
        }
      }
    })
  }
  return additions
}

export default () => {
  const testkit = {}
  const dependencies = {
    DALtestKit: DALTKFactory(testkit),
    userInfoTestKit: userInfoTKFactory(testkit),
    vipTestkit: vipTestkitFactory(testkit)
  }

  const build = () => {
    const data = {
      ...dependencies.DALtestKit.build(),
      ...dependencies.userInfoTestKit.build(),
      ...dependencies.vipTestkit.build()
    }
    return app(data)
  }
  Object.assign(testkit, combineTestkits(dependencies, testkit), dependencies, {build})
  return testkit
}
