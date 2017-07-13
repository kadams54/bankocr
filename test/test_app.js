var app = require('../src/app');
var assert = require('assert');

describe('App', function() {
  it('should run successfully with input file', function() {
    assert.equal(app.run('data/accounts.txt'), 0);
  });

  it('should fail if provided non-existent input file', function() {
    assert.equal(app.run('foo.txt'), 1);
  });
});
