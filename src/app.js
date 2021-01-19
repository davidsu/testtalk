import { setVeryImportantUserState } from './veryImportantStuff.js'
import * as userInfo from './userInfo.js'
import DAL from './DAL.js'

export default function() {
  return {
    getByPath: DAL.getByPath,
    setVeryImportantUserState,
    userInfo
  }
}
