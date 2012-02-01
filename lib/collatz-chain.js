var collatz = require('./collatz');

function collatzLink(n, array, callback) {
  var collatz_number = collatz(n);
  array.push(collatz_number);
  if (collatz_number == 1) {
    callback(array);
  } else {
    collatzLink(collatz_number, array, callback);
  }
}

function memoize(fun) {
  var cache = {};
  return function(n, array, callback) {
    if (cache[n]) {
      callback(array.concat(cache[n]));
    } else {
      fun(n, array, function(list) {
        cache[n] = list;
        callback(list);
      });
    }
  }
}

var handler = memoize(collatzLink);

function collatzChain(n, callback) {
  handler(n, [n], callback);
}

module.exports = collatzChain;
