const DALtestKit = require('./DAL.testkit.js')
describe('DAL', () => {
    it('should return object by path', () => {
        const DAL = DALtestKit().with.data({ a: {b: 1} }).build()
        expect(DAL.getByPath('a.b')).toEqual(1)
    })
})
