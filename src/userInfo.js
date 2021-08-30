export default function(DAL) {
    return {
        getCurrentUser: () => DAL.getByPath('currentUser'), 
        setCurrentUser: user => DAL.setByPath('currentUser', user)
    }
}
