
function odd(n) {
  return 3*n + 1;
}

function even(n) {
  return n / 2;
}

function collatz(n) {
  if (n % 2 == 0) {
    return even(n);
  } else {
    return odd(n);
  }
}

module.exports = collatz;
