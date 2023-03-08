/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let mapST = {};
  let mapTS = {};
  for (let i = 0; i < s.length; ++i) {
    if (!mapST[s[i]] && !mapTS[t[i]]) {
      mapST[s[i]] = t[i];
      mapTS[t[i]] = s[i];
      continue;
    }
    if (mapST[s[i]] !== t[i] || mapTS[t[i]] !== s[i]) {
      return false;
    }
  }
  return true;
};

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("badc", "baba"));
