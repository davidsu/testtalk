import veryImportantStuff from '../src/veryImportantStuff'
module.exports = (appTestKit) => ({
    build: () => veryImportantStuff(appTestKit.userInfo, appTestKit.DAL)
})
