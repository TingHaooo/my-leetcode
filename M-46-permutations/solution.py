class Solution:
    def permute(self, nums):
        result = [[nums[0]]]
        for i in range(1, len(nums)):
            permutations = []
            for p in result:
                for k in range(i + 1):
                    newP = [i for i in p]
                    newP.insert(k, nums[i])
                    permutations.append(newP)
            result = [p for p in permutations]

        return result


sol = Solution()
print(sol.permute([1, 0]))
