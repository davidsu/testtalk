import _ from 'lodash'
import { testkitFactory as testkitCreator } from '@walkme/testutils';
import DAL from '../src/DAL.js'
import { setVeryImportantUserState } from '../src/veryImportantStuff.js'
import userInfoTestKitFactory from './userInfo.testkit.js'

export default () => {
  const userInfoTestKit = userInfoTestKitFactory()
  const build = () => {
    DAL.resetState(userInfoTestKit.build())
    Object.assign(testkit, {DAL, setVeryImportantUserState})
    return testkit
  }
  const testkit = testkitCreator({userInfoTestKit}, {build})
  return testkit
}
