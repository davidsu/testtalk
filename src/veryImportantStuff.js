import _ from 'lodash'
import runTimeDal from './DAL.js'
import { getCurrentUser } from './userInfo.js'

const veryImportantUsers = [
  { mail: 'assaf.gannon@walkme.com', name: 'Assaf Gannon' },
  { mail: 'eli.b@walkme.com', name: 'Eli Blitz' },
]
const userIsImportant = currentUser => !!veryImportantUsers.find(user => _.isEqual(currentUser, user))
// const userIsImportant = ({mail, name}) => !!veryImportantUsers.find(user => _.isEqual({mail, name}, user))

export function setVeryImportantUserState() {
  const currentUser = getCurrentUser()
  if(!userIsImportant(currentUser)) {
    throw `${currentUser.name} can't be important!!!`
  }
  runTimeDal.setByPath('importantUser', true)
}
