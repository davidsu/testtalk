import DALfactory from './DAL.js'
import userInfoFactory from './userInfo.js'
import veryImportantStuffFactory from './veryImportantStuff.js'

export default function(initialState = {}) {
    const DAL = DALfactory(initialState)
    const userInfo = userInfoFactory(DAL)
    const veryImportantStuff = veryImportantStuffFactory(userInfo, DAL)
    return {
        DAL,
        userInfo,
        veryImportantStuff
    }
}
