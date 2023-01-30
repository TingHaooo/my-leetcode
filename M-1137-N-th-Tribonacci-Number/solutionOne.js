/**
 * @param {number} n
 * @return {number}
 */

let arr = [0, 1, 1];
var tribonacci = function (n) {
  if (n === 0) return arr[0];
  if (n === 1) return arr[1];
  if (n === 2) return arr[2];

  let cur = 2;
  while (cur !== n) {
    arr[cur + 1] = arr[cur] + arr[cur - 1] + arr[cur - 2];
    cur++;
  }
  return arr[n];
};

console.log(tribonacci(25));
