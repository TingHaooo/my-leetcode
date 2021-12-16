/**
 * @param {string} s
 * @return {number}
 */

const romanToIntMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const specialRomanToIntMap = {
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
};

var romanToInt = function (s) {
  let total = 0;
  let i = 0;
  for (; i < s.length; ) {
    // 加下一個字，檢查有沒有特殊字元
    if (s[i] && s[i + 1] && specialRomanToIntMap[s[i] + s[i + 1]]) {
      total += specialRomanToIntMap[s[i] + s[i + 1]];
      i += 2;
      continue;
    }
    // 一般字元
    total += romanToIntMap[s[i]];
    i += 1;
  }
  return total;
};

console.log(romanToInt("III")); // 3
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994
