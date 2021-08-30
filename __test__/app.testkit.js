import _ from 'lodash'
import userInfoTKFactory from './userInfo.testkit'
import DALTKFactory from './DAL.testkit'
import vipTestkitFactory from './vip.testkit'
import app from '../src/app'

export default () => {
  const testKit = {}
  const dependencies = {
    userInfoTestKit: userInfoTKFactory(testKit),
    DALtestKit: DALTKFactory(testKit),
    vipTestkit: vipTestkitFactory(testKit)
  }
  const additions = {}
  for(const kit of Object.values(dependencies)) {
    _.forOwn(kit, (val, key) => {
      if(typeof val === 'function') {
        additions[key] = (...args) => {
          val(...args)
          return testKit
        }
      }
    })
  }

  const build = () => {
    const data = {
      ...dependencies.DALtestKit.build(),
      ...dependencies.userInfoTestKit.build(),
      ...dependencies.vipTestkit.build()
    }
    return app(data)
  }
  Object.assign(testKit, additions, dependencies, {build})
  return testKit
}
