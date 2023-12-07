class Solution:
    def merge(self, intervals):
        sortedIntervals = sorted(intervals, key=lambda x: x[0])
        result = [sortedIntervals[0]]
        curE = result[-1][1]
        for i in range(1, len(sortedIntervals)):
            [s, e] = sortedIntervals[i]
            if s <= curE:
                result[-1][1] = max(e, curE)
            else:
                result.append(sortedIntervals[i])
            curE = result[-1][1]

        return result


sol = Solution()
print(sol.merge([[1, 3], [2, 6], [8, 10], [15, 18]]))  # [[1,6],[8,10],[15,18]]
print(sol.merge([[1, 4], [4, 5]]))  # [[1,5]]
print(sol.merge([[1, 4], [0, 4]]))  # [[0,4]]
print(sol.merge([[1, 4], [0, 2], [3, 5]]))  # [[0, 5]]
print(sol.merge([[2, 3], [2, 2], [3, 3], [1, 3], [5, 7], [2, 2], [4, 6]]))
# [[1, 3], [4, 7]]
