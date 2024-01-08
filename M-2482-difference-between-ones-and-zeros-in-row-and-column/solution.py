class Solution:
    def onesMinusZeros(self, grid):
        m = len(grid)
        n = len(grid[-1])
        diff = [[0 for _ in range(n)] for _ in range(m)]

        for r in range(m):
            for c in range(n):
                if not grid[r][c]:
                    grid[r][c] = -1

        rowSum = [sum(row) for row in grid]
        colSum = [0] * n
        for c in range(n):
            colSum[c] = sum([grid[r][c]for r in range(m)])

        for r in range(m):
            for c in range(n):
                diff[r][c] = rowSum[r] + colSum[c]

        return diff


sol = Solution()

print(sol.onesMinusZeros([[0, 1, 1], [1, 0, 1], [0, 0, 1]]))
