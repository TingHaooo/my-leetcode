/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  if (word.toUpperCase() === word || word.toLowerCase() === word) {
    return true;
  }

  if (
    word.charAt(0).toUpperCase() === word.charAt(0) &&
    word.slice(1).toLocaleLowerCase() === word.slice(1)
  ) {
    return true;
  }

  return false;
};

console.log(detectCapitalUse("USA")); // true
console.log(detectCapitalUse("Google")); // true
console.log(detectCapitalUse("leetcode")); // true
console.log(detectCapitalUse("leetcGde")); // false
