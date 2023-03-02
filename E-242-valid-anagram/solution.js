/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const arrT = t.split("").sort().join("");
  const arrS = s.split("").sort().join("");
  return arrT === arrS;
};
