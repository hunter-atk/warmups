const expect = require('chai').expect;
const commonElements = require('./array-intersection');

describe('commonElements', () => {
  it ('should return an array of unique common elements', () => {
    expect(commonElements([4], [5])).to.deep.equal( [] )
    expect(commonElements([4,4], [5,4])).to.deep.equal( [4] )
    expect(commonElements([1,2,3,4], [2,4])).to.deep.equal( [2,4] )
  })
})


