var lengthOfLongestSubstring = function (s) {
  if (!s.length) return 0;
  if (s.length === 1) return 1;
  let p = 0;
  const arr = [];

  for (let i = 0; i <= s.length; ++i) {
    const substr = s.slice(p, i);

    if (i === s.length) {
      arr.push(substr.length);
    }
    if (substr.includes(s[i])) {
      arr.push(substr.length);
      p += substr.indexOf(s[i]) + 1;
    }
  }

  return Math.max(...arr);
};

console.log(lengthOfLongestSubstring("a")); // return 1
console.log(lengthOfLongestSubstring("abcb")); // return 3
console.log(lengthOfLongestSubstring("abddefg")); // return 4
