class Solution:
    def maxProduct(self, nums: list[int]) -> int:
        maxNum = float('-inf')
        posNum = 1
        navNum = 1
        
        for i in range(0, len(nums)):
            if nums[i] == 0:
               posNum = 1
               navNum = 1
               maxNum = max(0, maxNum)
               continue
        
            if nums[i] < 0:
                if navNum > 0:
                    navNum = posNum * nums[i] * navNum
                    posNum = 1
                    maxNum = max(maxNum, navNum)
                else:
                    posNum = posNum * nums[i] * navNum
                    navNum = 1
                    maxNum = max(maxNum, posNum)
            else:
                posNum *= nums[i]
                maxNum = max(maxNum, posNum)
        
            
                
        return maxNum
    

sol = Solution()
print(sol.maxProduct([3, -1, 4])) # 4
print(sol.maxProduct([2, 3, -2, 4])) # 6
print(sol.maxProduct([0, -2])) # 0
print(sol.maxProduct([2,-5,-2,-4,3])) # 24


