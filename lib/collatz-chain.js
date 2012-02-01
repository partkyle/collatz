var collatz = require('./collatz');

function collatzChain(n, callback) {
  handle(n, [n], callback);
}

function handle(n, array, callback) {
  var collatz_number = collatz(n);
  array.push(collatz_number);
  if (collatz_number == 1) {
    callback(array);
  } else {
    handle(collatz_number, array, callback);
  }
}

module.exports = collatzChain;
