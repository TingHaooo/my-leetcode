/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  let partition = [];
  let partitionSet = [];
  for (let i = 0; i < s.length; ++i) {
    let belongIndex = partitionSet.length;
    for (let j = 0; j < partitionSet.length; ++j) {
      if (partitionSet[j].has(s[i])) {
        belongIndex = j;
      }
    }
    partition[belongIndex] = partition[belongIndex]
      ? partition[belongIndex] + 1
      : 1;
    if (partitionSet[belongIndex]) {
      partitionSet[belongIndex].add(s[i]);
    } else {
      partitionSet[belongIndex] = new Set([s[i]]);
    }
    for (let k = belongIndex + 1; k < partition.length; ++k) {
      partition[belongIndex] += partition[k];
      for (let s of partitionSet[k]) {
        partitionSet[belongIndex].add(s);
      }
    }
    partition.splice(belongIndex + 1, partition.length);
    partitionSet.splice(belongIndex + 1, partitionSet.length);
  }

  return partition;
};

console.log(partitionLabels("ababcbacadefegdehijhklij")); // [9,7,8]
console.log(partitionLabels("eccbbbbdec")); // [10]
console.log(partitionLabels("edcdaeeeaadeccb")); // [14, 1]
