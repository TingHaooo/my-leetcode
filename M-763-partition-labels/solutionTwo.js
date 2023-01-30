/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  let ends = {};
  for (let i = 0; i < s.length; ++i) {
    ends[s[i]] = i;
  }

  let left = 0;
  let right = 0;
  let result = [];
  for (let i = 0; i < s.length; ++i) {
    right = Math.max(right, ends[s[i]]);

    if (i === right) {
      result.push(right - left + 1);
      left = i + 1;
    }
  }

  return result;
};

console.log(partitionLabels("ababcbacadefegdehijhklij")); // [9,7,8]
console.log(partitionLabels("eccbbbbdec")); // [10]
console.log(partitionLabels("edcdaeeeaadeccb")); // [14, 1]
