import DAL  from './DAL.js'
export const getCurrentUser = () => DAL.getByPath('currentUser')
export const setCurrentUser = ({name, mail}) => DAL.setByPath('currentUser', {
  realMail: mail
    .replace(/\+.*@/g, '@')
    .replace(/\.(.*)@/g, '$1@'),
  name,
  mail
})
