class Solution:
    def canJump(self, nums) -> bool:
        jumpRange = nums[0]
        curIndex = 0
        while jumpRange != 0 and curIndex < len(nums) - 1:
            maxI = 0
            for i in range(curIndex + 1, curIndex + jumpRange + 1):
                if i > len(nums) - 1:
                    maxI = len(nums) -1
                    break
                maxI = i if (i + nums[i]) > maxI + nums[maxI] else maxI
            curIndex = maxI
            jumpRange = nums[curIndex]

        return curIndex >= len(nums) - 1
    
sol = Solution()
print(sol.canJump([2, 5, 0, 0]))