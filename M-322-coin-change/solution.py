class Solution:
    def coinChange(self, coins, amount):
        MAX = float("inf")
        dp = [0] + [MAX] * (amount)

        for i in range(1, amount + 1):
            for c in coins:
                if i - c >= 0:
                    dp[i] = min(dp[i], dp[i - c] + 1)

        if dp[-1] == MAX:
            return - 1

        return dp[amount]
