import testkit from './app.testkit.js'
describe('DAL', () => {
  it('should return object by path', () => {
    const {DAL} = testkit()
      .withData({ a: {b: 1} })
      .build()
    expect(DAL.getByPath('a.b')).toEqual(1)
  })
})
