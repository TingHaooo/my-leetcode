/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */

var sequentialDigits = function (low, high) {
  let allSeqDigits = [
    12, 23, 34, 45, 56, 67, 78, 89, 123, 234, 345, 456, 567, 678, 789, 1234,
    2345, 3456, 4567, 5678, 6789, 12345, 23456, 34567, 45678, 56789, 123456,
    234567, 345678, 456789, 1234567, 2345678, 3456789, 12345678, 23456789,
    123456789,
  ];
  let seqDigits = [];
  for (let i = 0; i < allSeqDigits.length; ++i) {
    if (allSeqDigits[i] >= low && allSeqDigits[i] <= high) {
      seqDigits.push(allSeqDigits[i]);
    }
  }

  return seqDigits;
};

console.log(sequentialDigits(100, 300)); // [123, 234]
console.log(sequentialDigits(1000, 13000)); // [1234,2345,3456,4567,5678,6789,12345]
console.log(sequentialDigits(13, 50)); // [23, 34, 45]
console.log(sequentialDigits(10, 100)); // [12, 23, 34, 45, 56, 67, 78, 89]
