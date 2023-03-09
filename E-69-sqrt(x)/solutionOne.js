/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 1) return 1;

  let left = 1;
  let right = x;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (mid * mid > x) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left - 1;
};

console.log(mySqrt(2)); // 1
console.log(mySqrt(4)); // 2
console.log(mySqrt(8)); // 2
console.log(mySqrt(16)); // 4
console.log(mySqrt(9)); // 3
console.log(mySqrt(10)); // 3
