class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        m = len(obstacleGrid)
        n = len(obstacleGrid[0])
        dp = [[0] * n] * m

        for r in range(0, m):
            for c in range(0, n):
                if obstacleGrid[r][c] is 1:
                    dp[r][c] = 0
                    continue;
                if r is 0 and c is 0:
                    dp[r][c] = 1
                    continue;
                if r is 0:
                    dp[r][c] = dp[r][c - 1]
                    continue;
                if c is 0:
                    dp[r][c] = dp[r - 1][c]
                    continue;

                dp[r][c] = dp[r - 1][c] + dp[r][c - 1]

        return dp[m - 1][n - 1]