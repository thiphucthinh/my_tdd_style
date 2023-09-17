function returnsThree() {
  return 3;
}

function reciprocal(n) {
  if(n < 1 || n > 1000000) {
    throw new RangeError("Range Error");
  }
  return 1 / n;
}

// Example
// console.log(reciprocal(0.5));
console.log(reciprocal(3));
// console.log(reciprocal(9000123));


module.exports = {
  returnsThree,
  reciprocal
};
