const assert = require('chai').assert
const { timestamp, naturalDate } = require('../src/timestamp')

describe('Timestamp', () => {
    it('should be a function', () => {
        assert.isFunction(timestamp)
    })
    describe('when called with no arguments', () => {
        it('should return an object with null values for all properties', () => {
            assert.deepEqual(timestamp(), {unix: null, natural: null})
        })
    })
    describe('when called with an invalid date string', function () {
        it('should return an object with null values for all properties', () => {
            assert.deepEqual(timestamp('yes'), {unix: null, natural: null})
            assert.deepEqual(timestamp('DECided'), {unix: null, natural: null})
            assert.deepEqual(timestamp('oct1222fish'), {unix: null, natural: null})
            assert.deepEqual(timestamp('APRILFIRSTTWOTHOUSANDANDTWO'), {unix: null, natural: null})
        })
    })
    describe('when called with a valid date string', function () {
        it('should return an object with the proper natural time string and unixtime', () => {
            const unixtime = new Date('November 26, 1987').valueOf() / 1000
            assert.deepEqual(timestamp('November 26, 1987'), {unix: unixtime, natural: 'November 26, 1987'})
        })
    })
    describe('when called with a unix timestamp', () => {
        it('should return an object with the proper natural time string and unixtime', () => {
            const unixtime = new Date('November 26, 1987').valueOf() / 1000
            assert.deepEqual(timestamp(unixtime), {unix: unixtime, natural: 'November 26, 1987'})
        })
    })
})

describe('naturalDate', () => {
    describe('when called with a date string', () => {
        it('will return a natural language representation of the date', () => {
            const natural = 'November 26, 1987'
            const datestring = new Date('November 26, 1987').toString()
            assert.equal(naturalDate(datestring), natural)
        })
    })
})
