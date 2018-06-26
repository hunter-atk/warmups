const expect = require('chai').expect;
const largestProduct = require('./array-product');

describe('largestProduct', () => {
  it('finds the largest product of any two elements in an array', () => {
      expect(largestProduct([1, 2, 3])).to.deep.equal(6)
      expect(largestProduct([1, -2, 3])).to.deep.equal(3)
      expect(largestProduct([100, -20, -50])).to.deep.equal(1000)
      expect(largestProduct([100, -2, -50])).to.deep.equal(100)
  })
})
