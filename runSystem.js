import app from './src/app.js'

const {DAL, userInfo, veryImportantStuff} = app()

userInfo.setCurrentUser({ mail: 'eli.b@walkme.com', name: 'Eli Blitz' })
veryImportantStuff.setVeryImportantUserState()
console.log(JSON.stringify({
    currentUser: DAL.getByPath('currentUser'),
    importantUser: DAL.getByPath('importantUser')
}, null, 4))
