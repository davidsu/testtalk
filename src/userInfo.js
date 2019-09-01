module.exports = DAL => ({
    getCurrentUser: () => DAL.getByPath('currentUser'), //set default to null to fail test
    // getUser: () => DAL.getByPath('currentUser'), //set default to null to fail test
    setCurrentUser: user => {
        // const realMail = user.mail.replace(/\.(.*)@/g, '$1@')
        // DAL.setByPath('currentUser', {realMail, ...user})
        DAL.setByPath('currentUser', user)
    }
})

