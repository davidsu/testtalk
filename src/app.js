import { setVeryImportantUserState } from './veryImportantStuff.js'
import * as userInfo from './userInfo.js'
import runTimeDal from './DAL.js'

export default function() {
  return {
    getByPath: runTimeDal.getByPath,
    setVeryImportantUserState,
    userInfo
  }
}
