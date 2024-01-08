class Solution:
    def minCost(self, colors, neededTime):
        cost = 0
        dp = [0]

        for i in range(1, len(colors)):
            if colors[i] == colors[i - 1]:
                dp.append(i)
                continue

            if len(dp) != 1:
                times = list(map(lambda i: neededTime[i], dp))
                cost += (sum(times) - max(times))

            dp = [i]

        if len(dp) != 1:
            times = list(map(lambda i: neededTime[i], dp))
            cost += (sum(times) - max(times))

        return cost


sol = Solution()
print(sol.minCost("aaabbbabbbb", [3, 5, 10, 7, 5, 3, 5, 5, 4, 8, 1]))
