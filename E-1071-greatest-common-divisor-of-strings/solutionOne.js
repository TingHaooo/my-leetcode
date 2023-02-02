/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

const canDivideStr = (str, divider) => {
  for (let i = 0; i < str.length; i += divider.length) {
    if (str.slice(i, i + divider.length) !== divider) {
      return false;
    }
  }
  return true;
};

var gcdOfStrings = function (str1, str2) {
  let divider = "";
  const [longStr, shortStr] =
    str1.length > str2.length ? [str1, str2] : [str2, str1];
  for (let i = shortStr.length; i >= 1; --i) {
    if (!(shortStr.length % i === 0 && longStr.length % i === 0)) {
      continue;
    }
    const curDivider = shortStr.slice(0, i);

    if (
      canDivideStr(longStr, curDivider) &&
      canDivideStr(shortStr, curDivider)
    ) {
      divider = curDivider;
      break;
    }
  }

  return divider;
};

console.log(gcdOfStrings("ABABAB", "ABAB"));
