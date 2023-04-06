class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        dp = [[0] * n] * m
        for i in range(0, m):
            for k in range(0, n):
                if i == 0 or k == 0:
                    dp[i][k] = 1
                else:
                    dp[i][k] = dp[i - 1][k] + dp[i][k - 1]
        
        return dp[m - 1][n - 1]
                    
        
sol = Solution()
print(sol.uniquePaths(3, 7))