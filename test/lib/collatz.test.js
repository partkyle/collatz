var collatz = require('../../lib/collatz');

describe('collatz', function() {
  it('should divide even numbers by 2', function() {
    var n = 0;
    while (n < 1000) {
      var result = collatz(n);
      expect(result).to.equal(n / 2);
      n += 2;
    }
  });

  it('should triple and add 1 to odd numbers', function() {
    var n = 1;
    while (n < 1000) {
      var result = collatz(n);
      expect(result).to.equal(3*n + 1);
      n += 2;
    }
  });
});
