import _ from 'lodash'
import userInfo from '../src/userInfo'
import DAL from './DAL.testkit.js'
export default () => {
    const DALtestKit = DAL()
    let currentUser = { 
        mail: 'dumm.y@mail.com', 
        name: 'Dummy User', 
        // realMail: 'dummy@mail.com'
    }
    const testKit =  {
        with: {
            currentUser: user => {
                currentUser = {...currentUser, ...user}
                currentUser = _.pick(currentUser, ['mail', 'name'])
                DALtestKit.with.data({currentUser})
                return testKit
            }
        },
        build: () => {
            const DAL = DALtestKit.build()
            return  {
                userInfo: userInfo(DAL),
                DAL
            }
        }
    }
    return testKit
}
