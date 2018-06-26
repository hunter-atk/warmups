const expect = require('chai').expect;
const { removeBadPeople, sumAgesValid, sumAgesAll } = require('./array-of-objects');

describe('removeBadPeople', () => {
    it('removes bad people', () => {
        expect(removeBadPeople([{ name: 'Andy', age: 42 }, { name: 'Betty', age: -23 }])).to.deep.equal([{ name: 'Andy', age: 42 }])
        expect(removeBadPeople([{ name: '', age: 22 }, {}])).to.deep.equal([])
        expect(removeBadPeople([{ name: 'Betty', age: 82 }, { name: '', age: 23 }])).to.deep.equal([{ name: 'Betty', age: 82 }])
        expect(removeBadPeople([])).to.deep.equal([])
    })
})

describe('sumAgesValid', () => {
    it('sums ages of all valid people', () => {
        expect(sumAgesValid([{ name: 'Andy', age: 42 }, { name: 'Betty', age: -23 }])).to.deep.equal(42)
        expect(sumAgesValid([{ name: '', age: 22 }, {}])).to.deep.equal(0)
        expect(sumAgesValid([{ name: 'Betty', age: 82 }, { name: '', age: 23 }])).to.deep.equal(82)
        expect(sumAgesValid([])).to.deep.equal(0)
    })
})

describe('sumAgesAll', () => {
    it('sums ages of all valid AND invalid people', () => {
        expect(sumAgesAll([{ name: 'Andy', age: 42 }, { name: 'Betty', age: -23 }])).to.deep.equal(19)
        expect(sumAgesAll([{ name: '', age: 22 }, {}])).to.deep.equal(22)
        expect(sumAgesAll([{ name: 'Betty', age: 82 }, { name: '', age: 23 }])).to.deep.equal(105)
        expect(sumAgesAll([])).to.deep.equal(0)
    })
})