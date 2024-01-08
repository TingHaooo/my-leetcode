class Solution:
    def longestConsecutive(self, nums):
        g = {}
        for n in nums:
            g[n] = None

        def dfs(k):
            if k + 1 not in g:
                return 1

            if g[k + 1]:
                return 1 + g[k + 1]

            g[k] = 1 + dfs(k + 1)
            return g[k]

        result = 0
        for key in g.keys():
            if g[key] is None:
                c = dfs(key)
                g[key] = c
            result = max(result, g[key])

        return result


sol = Solution()

sol.longestConsecutive([100, 4, 200, 1, 3, 2])
sol.longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])
