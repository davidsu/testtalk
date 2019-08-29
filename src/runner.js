export default factory = (userInfo, state) => {
    const getCurrentUser = () => {
        const haveCurrentUser = state.getLogedInState() !== 'not logedin'
        const currentUserId = userInfo.getCurrentUserId()
        const mail = userInfo.getMail(currentUserId)
        const url = userInfo.getUrl(currentUserId)
        return {mail, url}
    }
}

