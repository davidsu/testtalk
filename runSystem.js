#!/usr/bin/env node
const DAL = require('./src/DAL')({})
const userInfo = require('./src/userInfo')(DAL)
const veryImportantStuff = require('./src/veryImportantStuff')(userInfo, DAL)

userInfo.setCurrentUser({ mail: 'eli.b@walkme.com', name: 'Eli Blitz' })
veryImportantStuff.setVeryImportantUserState()
console.log(JSON.stringify({
    currentUser: DAL.getByPath('currentUser'),
    importantUser: DAL.getByPath('importantUser')
}, null, 4))

