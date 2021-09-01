import _ from 'lodash'
import chalk from 'chalk'

const vips = [
  { mail: 'david.susskind@walkme.com', name: 'David Susskind' },
  { mail: 'eli.b@walkme.com', name: 'Eli Blitz' },
  { mail: 'omry.n@walkme.com', name: 'Omry Nachman' },
]

const isIteresting = currentUser => !!vips.find(user => _.isEqual(currentUser, user))
// const isIteresting = ({mail, name}) => !!veryImportantUsers.find(user => _.isEqual({mail, name}, user))

export default function(userInfo, DAL) {

  const enter = () => {
    const currentUser = userInfo.getCurrentUser()
    if(!isIteresting(currentUser)) {
      console.error(chalk.red(`${currentUser.name} is BORING!!!`))
      throw `${currentUser.name} is BORING!!!`
    }
    DAL.setByPath('isVip', true)
  }

  const isVip = () => DAL.getByPath('isVip')

  return {
    enter,
    isVip
  }
}

