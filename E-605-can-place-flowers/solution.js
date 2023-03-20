/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let count = n;
  for (let i = 0; i < flowerbed.length; ++i) {
    if (count <= 0) {
      break;
    }
    // can place
    if (!flowerbed[i - 1] && !flowerbed[i + 1] && !flowerbed[i]) {
      count--;
      flowerbed[i] = 1;
    }
  }

  return !count;
};
