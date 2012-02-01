var collatzChain = require('../../lib/collatz-chain');

describe('collatzChain', function() {
  it('should work for 12', function(done) {
    collatzChain(12, function(list) {
      expect(list).to.eql([12, 6, 3, 10, 5, 16, 8, 4, 2, 1]);
      done();
    });
  });

  it('should work for a power of 2', function(done) {
    collatzChain(128, function(list) {
      expect(list).to.eql([128, 64, 32, 16, 8, 4, 2, 1]);
      done();
    });
  });
});
