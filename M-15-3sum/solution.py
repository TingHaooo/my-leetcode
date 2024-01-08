class Solution:
    def getCombination(self, nums):
        c = []
        for i in range(len(nums)):
            for j in range(len(nums)):
                if i < j:
                    c.append([i, j])

        return c

    def threeSum(self, nums):
        s = set()
        c = self.getCombination(nums)
        for i, j in c:
            for k in range(len(nums)):
                if i != j and j != k and i != k and nums[i] + nums[j] + nums[k] == 0:
                    arr = sorted([nums[i], nums[j], nums[k]])
                    s.add((arr[0], arr[1], arr[2]))

        return [list(i) for i in s]


sol = Solution()

print(sol.threeSum([-1, 0, 1, 2, -1, -4]))
