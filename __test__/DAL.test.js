import DAL from '../src/DAL'
describe('DAL', () => {
  it('should return object by path', () => {
    const dal = DAL({a: {b: 1}})
    expect(dal.getByPath('a.b')).toEqual(1)
  })
})
