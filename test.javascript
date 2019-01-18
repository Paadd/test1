const addsOne = (num) => num + 1

describe('addsOne', () => {
  it('adds a number', () => {
    const numPlus1 = addsOne(3)
    expect(numPlus1).toEqual(4)
  })
  it('will not add a string', () => {
    const stringNumPlus1 = addsOne('3')
    expect(stringNumPlus1 === 4).toBeFalsy();
  })
})