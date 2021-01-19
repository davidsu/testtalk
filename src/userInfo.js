import runTimeDal  from './DAL.js'
export const getCurrentUser = () => runTimeDal.getByPath('currentUser')
export const setCurrentUser = user => runTimeDal.setByPath('currentUser', user)
