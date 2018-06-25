const expect = require('chai').expect;
const {removeBadPeople, sumAgesValid, sumAgesAll} = require('./array-of-objects');

describe('removeBadPeople', () => {
  it ('removes bad people', () => {
    expect(removeBadPeople([ { name: 'Andy', age: 42}, { name: 'Betty', age: -23} ])).to.deep.equal( [ { name: 'Andy', age: 42} ] )
    expect(removeBadPeople([ { name: '', age: 22}, {} ])).to.deep.equal( [] )
    expect(removeBadPeople([ { name: 'Betty', age: 82}, { name: '', age: 23} ])).to.deep.equal( [ { name: 'Betty', age: 82} ] )
    expect(removeBadPeople([])).to.deep.equal( [] )
  })
})

describe('sumAgesValid', () => {
    it ('removes bad people', () => {
      expect(sumAgesValid([ { name: 'Andy', age: 42}, { name: 'Betty', age: -23} ])).to.deep.equal( [ { name: 'Andy', age: 42} ] )
      expect(sumAgesValid([ { name: '', age: 22}, {} ])).to.deep.equal( [] )
      expect(sumAgesValid([ { name: 'Betty', age: 82}, { name: '', age: 23} ])).to.deep.equal( [ { name: 'Betty', age: 82} ] )
      expect(sumAgesValid([])).to.deep.equal( [] )
    })
  })