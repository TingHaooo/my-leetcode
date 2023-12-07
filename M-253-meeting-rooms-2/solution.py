class Solution:
    def numberOfMeetingRooms(self, intervals):
        end, cnt = float('-inf'), 0
        for s, e in sorted(intervals, key=lambda x: x[1]):
            if s >= end:
                end = e
            else:
                cnt += 1
        return cnt + 1


sol = Solution()
print(sol.numberOfMeetingRooms([[0, 30], [5, 10], [15, 20]]))  # 2
print(sol.numberOfMeetingRooms([[7, 10], [2, 4]]))  # 1
