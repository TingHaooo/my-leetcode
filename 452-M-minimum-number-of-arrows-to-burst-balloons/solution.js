/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  const cPoints = [...points];
  cPoints.sort((a, b) => a[0] - b[0]);
  let minNumArrow = 1;
  let arrowPos = cPoints[0];
  for (let i = 1; i < cPoints.length; ++i) {
    if (arrowPos[1] >= cPoints[i][0]) {
      continue;
    }
    minNumArrow += 1;
    arrowPos = cPoints[i];
  }

  return minNumArrow;
};

console.log(
  findMinArrowShots([
    [10, 16],
    [2, 8],
    [1, 6],
    [7, 12],
  ])
); // 2
console.log(
  findMinArrowShots([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
  ])
); // 4
console.log(
  findMinArrowShots([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
  ])
); // 2

console.log(
  findMinArrowShots([
    [5, 9],
    [3, 9],
    [7, 12],
    [3, 8],
    [6, 8],
    [9, 10],
    [2, 9],
    [0, 9],
    [3, 9],
    [0, 6],
    [2, 8],
  ])
); // 2
