const assert = require('chai').assert
const timestamp = require('../src/timestamp')

describe('Timestamp', function () {
    it('should is a function', function () {
        assert.isFunction(timestamp)
    })
})
