class Solution:
    def eraseOverlapIntervals(self, intervals):
        end, cnt = float('-inf'), 0
        for s, e in sorted(intervals, key=lambda x: x[1]):
            if s >= end:
                end = e
            else:
                cnt += 1
        return cnt


sol = Solution()
print(sol.eraseOverlapIntervals([[1, 3], [1, 5], [6, 8]]))  # 1
print(sol.eraseOverlapIntervals([[1, 11], [2, 12], [11, 22], [1, 100]]))  # 2
