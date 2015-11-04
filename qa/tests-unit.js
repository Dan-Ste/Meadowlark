var fortune = require('../lib/fortune.js');
var expect = require('chai').expect;

suite('Fortune coookie tests', function () {
	test('getFortune() should return a fortune', function(){
		expect(typeof fortune.getFortune() === 'string');
	});
});