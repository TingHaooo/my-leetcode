class Solution:
    def permute(self, nums):
        nums.sort()
        res = []
        used = set()

        def backTracking(perm):
            if len(perm) == len(nums):
                res.append(perm[:])
                return

            for i in range(len(nums)):
                if nums[i] in used:
                    continue
                perm.append(nums[i])
                used.add(nums[i])
                backTracking(perm)
                if nums[i] in used:
                    used.remove(nums[i])
                perm.pop()

        backTracking([])

        return res


sol = Solution()
print(sol.permute([1, 2, 3]))
