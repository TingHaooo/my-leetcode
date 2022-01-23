/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */

var sequentialDigits = function (low, high) {
  let arr = [];
  for (let i = low; i < high + 1; ++i) {
    let numStr = i.toString();
    let isSeq = true;
    for (let j = 0; j < numStr.length - 1; ++j) {
      if (parseInt(numStr[j]) + 1 !== parseInt(numStr[j + 1])) {
        isSeq = false;
        break;
      }
    }
    if (isSeq) {
      arr.push(i);
    }
  }

  return arr;
};

console.log(sequentialDigits(100, 300)); // [123, 234]
console.log(sequentialDigits(1000, 13000)); // [1234,2345,3456,4567,5678,6789,12345]
console.log(sequentialDigits(13, 50)); // [23, 34, 45]
console.log(sequentialDigits(10, 100)); // [12, 23, 34, 45, 56, 67, 78, 89]
