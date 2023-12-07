class Solution:
    def merge(self, intervals):
        sortedIntervals = sorted(intervals, key=lambda x: x[0])
        curN = sortedIntervals[0][1]
        for i in range(1, len(sortedIntervals)):
            [s, e] = sortedIntervals[i]
            if s < curN:
                return False
            curN = max(curN, e)

        return True


sol = Solution()
print(sol.merge([[1, 3], [2, 6], [8, 10], [15, 18]]))  # false
print(sol.merge([[1, 6], [2, 4], [5, 10], [15, 18]]))  # false
print(sol.merge([[1, 4], [4, 5]]))  # true
