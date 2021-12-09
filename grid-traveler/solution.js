const gridTraveler = (r, c, memo = {}) => {
  const key = `${r},${c}`;
  console.log(key);
  if (memo[key]) return memo[key];
  if (r === 1 && c === 1) return 1;
  if (r === 0 || c === 0) return 0;
  memo[key] = gridTraveler(r - 1, c, memo) + gridTraveler(r, c - 1, memo);
  return memo[key];
};

console.log(gridTraveler(1, 1)); // 1
console.log(gridTraveler(2, 3)); // 3
console.log(gridTraveler(3, 2)); // 3
console.log(gridTraveler(3, 3)); // 6
console.log(gridTraveler(23, 12)); //193536720
