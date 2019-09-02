import _ from 'lodash'
import chalk from 'chalk'

const veryImportantUsers = [
    { mail: 'eli.b@walkme.com', name: 'Eli Blitz' },
    { mail: 'omri.ey@walkme.com', name: 'Omri Eyal' },
]
const userIsImportant = currentUser => !!veryImportantUsers.find(user => _.isEqual(currentUser, user))
// const userIsImportant = ({mail, name}) => !!veryImportantUsers.find(user => _.isEqual({mail, name}, user))

export default function(userInfo, DAL) {

    const setVeryImportantUserState = () => {
        const currentUser = userInfo.getCurrentUser()
        if(!userIsImportant(currentUser)) {
            console.error(chalk.red(`${currentUser.name} is not important!!!`))
            throw `${currentUser.name} is not important!!!`
        }
        DAL.setByPath('importantUser', true)
    }

    return {
        setVeryImportantUserState
    }
}

