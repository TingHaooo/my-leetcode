/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */

var sequentialDigits = function (low, high) {
  let seqDigits = [];
  for (let i = 1; i < 10; ++i) {
    let num = i;
    let next = i;
    while (num <= high && next < 10) {
      if (num >= low) {
        seqDigits.push(num);
      }
      next += 1;
      num = num * 10 + next;
    }
  }

  return seqDigits;
};

console.log(sequentialDigits(100, 300)); // [123, 234]
console.log(sequentialDigits(1000, 13000)); // [1234,2345,3456,4567,5678,6789,12345]
console.log(sequentialDigits(13, 50)); // [23, 34, 45]
console.log(sequentialDigits(10, 100)); // [12, 23, 34, 45, 56, 67, 78, 89]
