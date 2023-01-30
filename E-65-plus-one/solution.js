/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let result = "";
  for (let i = 0; i < digits.length; ++i) {
    result += digits[i].toString();
  }

  return (BigInt(`${result}`) + BigInt(`1`)).toString().split("");
};

console.log(plusOne([1, 2, 3]));
