var uniquePaths = function (r, c, memo = {}) {
  const key = r + "," + c;
  if (key in memo) return memo[key];
  if (r === 1 && c === 1) return 1;
  if (r === 0 || c === 0) return 0;
  memo[key] = uniquePaths(r - 1, c, memo) + uniquePaths(r, c - 1, memo);
  return memo[key];
};
