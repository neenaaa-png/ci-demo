const { test } = require('node:test');
const assert = require('node:assert');
const add = require('../app');

test('Addition of two numbers', () => {
    assert.strictEqual(add(5, 3), 8);
});

test('Addition of positive and negative numbers', () => {
    assert.strictEqual(add(10, -5), 5);
});
