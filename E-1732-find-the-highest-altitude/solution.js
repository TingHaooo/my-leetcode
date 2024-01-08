/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let largest = 0;
  let cur = 0;
  for (let i = 0; i < gain.length; ++i) {
    let nextAltitude = cur + gain[i];
    largest = Math.max(largest, nextAltitude);
    cur = nextAltitude;
  }
  return largest;
};

console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2])); // 0
