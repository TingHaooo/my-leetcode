/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
  let first = -1;
  let second = -1;
  for (let i = 0; i < s.length; ++i) {
    let num = parseInt(s[i]);
    if (isNaN(num)) continue;

    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && first > num) {
      second = num;
    }
  }

  return second;
};
