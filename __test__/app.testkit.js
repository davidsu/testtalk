import _ from 'lodash'
import userInfoTKFactory from './userInfo.testkit'
import DALTKFactory from './DAL.testkit'
import veryImportantStuffTKFactory from './veryImportantStuff.testkit'

export default () => {
    const testKit = {}
    const dependencies = {
        userInfoTestKit: userInfoTKFactory(testKit),
        DALtestKit: DALTKFactory(testKit),
        veryImportantStuffTestKit: veryImportantStuffTKFactory(testKit)
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
        const DAL = testKit.DAL = dependencies.DALtestKit.build()
        const userInfo = testKit.userInfo = dependencies.userInfoTestKit.build()
        const veryImportantStuff = dependencies.veryImportantStuffTestKit.build()
        return {
            DAL,
            userInfo,
            veryImportantStuff
        }
    }
    Object.assign(testKit, additions, dependencies, {build})
    return testKit
}
