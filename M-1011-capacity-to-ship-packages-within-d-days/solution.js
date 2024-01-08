/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */

var canShip = (weights, capacity, days) => {
  let requiredDays = 1;
  let curLoad = 0;

  for (let i = 0; i < weights.length; ++i) {
    if (curLoad + weights[i] > capacity) {
      curLoad = weights[i];
      requiredDays += 1;
    } else {
      curLoad += weights[i];
    }
  }

  return requiredDays <= days;
};

var shipWithinDays = function (weights, days) {
  let sum = 0;
  let max = 0;
  for (let i = 0; i < weights.length; ++i) {
    sum += weights[i];
    max = Math.max(weights[i], max);
  }

  let minCapacity = Math.max(Math.ceil(sum / days), max);

  while (!canShip(weights, minCapacity, days)) {
    minCapacity++;
  }

  return minCapacity;
};

// console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.log(shipWithinDays([1, 2, 3, 1, 1], 5));
