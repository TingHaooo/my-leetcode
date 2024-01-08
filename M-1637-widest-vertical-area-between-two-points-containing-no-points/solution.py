class Solution:
    def maxWidthOfVerticalArea(self, points):
        l = sorted(map(lambda x: x[0], points))

        r = 0
        for i in range(1, len(l)):
            r = max(r, l[i] - l[i - 1])

        return r


sol = Solution()
print(sol.maxWidthOfVerticalArea([[8, 7], [9, 9], [7, 4], [9, 7]]))
print(sol.maxWidthOfVerticalArea(
    [[3, 1], [9, 0], [1, 0], [1, 4], [5, 3], [8, 8]]))
