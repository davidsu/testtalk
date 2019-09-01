module.exports = (DAL) => {
    getCurrentUser: () => DAL.getByPath('currentUser'), //set default to null to fail test
    setCurrentUser: user => {
        //this will change to add realEmail
        DAL.setByPath('currentUser', user)
    }
}

