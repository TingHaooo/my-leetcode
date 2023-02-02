/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

const gcd = (a, b) => {
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
};

const gcdOfStrings = function (str1, str2) {
  // Check if the concatenations of str1 and str2 in different orders are the same.
  if (str1 + str2 !== str2 + str1) return "";

  return str1.slice(0, gcd(str1.length, str2.length));
};

console.log(gcd(3, 6));
console.log(gcdOfStrings("ABCABC", "ABC"));
