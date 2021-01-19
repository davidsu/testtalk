import runTimeDal  from './DAL.js'
export const getCurrentUser = () => runTimeDal.getByPath('currentUser')
export const setCurrentUser = user => runTimeDal.setByPath('currentUser', user)
// export const setCurrentUser = user => runTimeDal.setByPath('currentUser', {
//     realMail:user.mail
//         .replace(/\+.*@/g, '@')
//         .replace(/\.(.*)@/g, '$1@'),
//     ...user
// })
