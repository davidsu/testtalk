import DALfactory from './DAL.js'
import userInfoFactory from './userInfo.js'
import vipFactory from './vip.js'

export default function(initialState = {}) {
  const DAL = DALfactory(initialState)
  const userInfo = userInfoFactory(DAL)
  const vip = vipFactory(userInfo, DAL)
  return {
    DAL,
    userInfo,
    vip
  }
}
