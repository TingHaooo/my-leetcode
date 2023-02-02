/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  const sortedWords = [...words].sort((a, b) => {
    let result = 0;
    let len = a.length > b.length ? a.length : b.length;
    for (let i = 0; i < len; ++i) {
      if (order.indexOf(a[i]) === order.indexOf(b[i])) continue;
      if (order.indexOf(a[i]) > order.indexOf(b[i])) {
        result = 1;
        break;
      } else {
        result = -1;
        break;
      }
    }

    return result;
  });

  for (let i = 0; i < words.length; ++i) {
    if (sortedWords[i] !== words[i]) return false;
  }
  return true;
};

console.log(isAlienSorted(["word", "world"], "worldabcefghijkmnpqstuvxyz"));
console.log(isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz"));
console.log(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));
