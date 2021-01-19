import app from './src/app.js'

const {getByPath, userInfo, veryImportantStuff, setVeryImportantUserState} = app()

userInfo.setCurrentUser({ mail: 'eli.b@walkme.com', name: 'Eli Blitz' })
try {
    setVeryImportantUserState()
    console.log(JSON.stringify({
        currentUser: getByPath('currentUser'),
        importantUser: getByPath('importantUser')
    }, null, 4))
} catch(ERROR) {
    console.log('#'.repeat(30))
    console.log({ERROR})
    console.log('#'.repeat(30))
}
