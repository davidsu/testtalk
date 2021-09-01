import _ from 'lodash'
import chalk from 'chalk'

const veryImportantUsers = [
  { mail: 'david.susskind@walkme.com', name: 'David Susskind' },
  { mail: 'eli.b@walkme.com', name: 'Eli Blitz' },
  { mail: 'omry.n@walkme.com', name: 'Omry Nachman' },
]
const userIsImportant = currentUser => !!veryImportantUsers.find(user => _.isEqual(currentUser, user))

export default function(userInfo, DAL) {

  const set = () => {
    const currentUser = userInfo.getCurrentUser()
    if(!userIsImportant(currentUser)) {
      console.error(chalk.red(`${currentUser.name} is BORING!!!`))
      throw `${currentUser.name} is BORING!!!`
    }
    DAL.setByPath('importantUser', true)
  }

  return {
    set
  }
}

