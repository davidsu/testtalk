export default function(DAL) {
    return {
        getCurrentUser: () => DAL.getByPath('currentUser'), 
        setCurrentUser: user => {
            DAL.setByPath('currentUser', user)
            // const realMail = user.mail
            //                     .replace(/\+.*@/g, '@')
            //                     .replace(/\.(.*)@/g, '$1@')
            // DAL.setByPath('currentUser', {realMail, ...user})
        }
    }
}
