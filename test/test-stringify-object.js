/*global describe, it */
'use strict';
var assert = require('assert');
var fs = require('fs');
var stringifyObject = require('../stringify-object');


describe('stringifyObject()', function () {
	/*jshint quotmark:false */
	it('should stringify an object', function () {
		var obj = {
			foo: "bar 'bar'",
			foo2: [
				"foo",
				"bar",
				{
					foo: "bar 'bar'"
				}
			],
			"foo-foo": "bar",
			"2foo": "bar",
			"@#": "bar",
			$el: "bar",
			_private: "bar"
		};

		var actual = stringifyObject(obj, {
			indent: '  ',
			singleQuotes: false
		});

		var expected = fs.readFileSync('test/fixture.js', 'utf8');
		assert.equal(actual + '\n', expected);
	});
});
