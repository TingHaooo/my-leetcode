/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
  let sumOfA = 0;
  let refunds = [];

  for (let i = 0; i < costs.length; ++i) {
    sumOfA += costs[i][0];
    refunds.push(costs[i][1] - costs[i][0]);
  }

  refunds.sort((a, b) => a - b);

  return (
    sumOfA +
    refunds.slice(0, costs.length / 2).reduce((acc, cur) => acc + cur, 0)
  );
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
