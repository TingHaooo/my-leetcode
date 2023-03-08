/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let curI = 0;

  for (let i = 0; i < t.length; ++i) {
    if (t[i] === s[curI]) {
      curI++;
    }
  }

  return curI === s.length ? true : false;
};

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
