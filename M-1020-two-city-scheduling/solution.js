/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (
  costs,
  aRemain = costs.length / 2,
  bRemain = costs.length / 2,
  sum = 0,
  index = 0,
  results = []
) {
  if (index === costs.length) {
    results.push(sum);
  }
  if (aRemain) {
    const newSum = sum + costs[index][0];
    twoCitySchedCost(costs, aRemain - 1, bRemain, newSum, index + 1, results);
  }
  if (bRemain) {
    const newSum = sum + costs[index][1];
    twoCitySchedCost(costs, aRemain, bRemain - 1, newSum, index + 1, results);
  }
  return results.reduce((acc, cur) => (acc < cur ? acc : cur), Infinity);
};

console.log(
  twoCitySchedCost([
    [10, 20],
    [30, 200],
    [400, 50],
    [30, 20],
  ])
); // 110
console.log(
  twoCitySchedCost([
    [259, 770],
    [448, 54],
    [926, 667],
    [184, 139],
    [840, 118],
    [577, 469],
  ])
); // 1859
console.log(
  twoCitySchedCost([
    [515, 563],
    [451, 713],
    [537, 709],
    [343, 819],
    [855, 779],
    [457, 60],
    [650, 359],
    [631, 42],
  ])
); // 3086
