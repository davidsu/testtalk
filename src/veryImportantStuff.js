const _ = require('lodash')
const chalk = require('chalk')
module.exports = (userInfo, DAL) => {
    const veryImportantUsers = [
        { mail: 'eli.b@walkme.com', name: 'Eli Blitz' },
        { mail: 'omri.ey@walkme.com', name: 'Omri Eyal' },
    ]
    const setVeryImportantUserState = () => {
        const currentUser = userInfo.getCurrentUser()
        const isHeImportant = !!veryImportantUsers.find(user => _.isEqual(currentUser, user))
        if(!isHeImportant) {
            console.error(chalk.red('is not important!!!'))
            throw 'current user is not important'
        }
        DAL.setByPath('importantUser', true)
    }
    return {
        setVeryImportantUserState
    }
}
