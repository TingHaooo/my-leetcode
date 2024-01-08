class Solution:
    def twoSum(self, nums, target):
        for i in range(len(nums)):
            for j in range(len(nums)):
                if i == j:
                    continue

                if nums[i] + nums[j] == target:
                    return sorted([i, j])
