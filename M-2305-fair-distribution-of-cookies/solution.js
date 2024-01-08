/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function (cookies, k) {
  let result = [];
  for (let i = 0; i < k; ++i) {
    result.push(0);
  }

  for (let i = 0; i < cookies.length; ++i) {
    let minIndex = 0;
    let minV = Infinity;
    for (let j = 0; j < result.length; ++j) {
      if (result[j] < minV) {
        minIndex = j;
        minV = result[j];
      }
    }
    result[minIndex] += cookies[i];
  }

  return Math.max(...result);
};

console.log(distributeCookies([8, 8, 10, 15, 20], 2));
