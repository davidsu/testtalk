export default (appTestKit) => {
  const state = {isVip: false}
  const withIsVip = () => state.isVip = true
  const build =  () => state
  return {withIsVip, build}
}
