import DALfactory from './src/DAL.js'
import userInfoFactory from './src/userInfo.js'
import veryImportantStuffFactory from './src/veryImportantStuff.js'

const DAL = DALfactory({})
const userInfo = userInfoFactory(DAL)
const veryImportantStuff = veryImportantStuffFactory(userInfo, DAL)

userInfo.setCurrentUser({ mail: 'eli.b@walkme.com', name: 'Eli Blitz' })
veryImportantStuff.setVeryImportantUserState()
console.log(JSON.stringify({
    currentUser: DAL.getByPath('currentUser'),
    importantUser: DAL.getByPath('importantUser')
}, null, 4))
