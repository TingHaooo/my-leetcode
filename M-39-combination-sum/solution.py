# class Solution:
#     def combinationSum(self, candidates, target):
#         res = []
#         candidates.sort()

#         def backTracking(comb):
#             if sum(comb) > target:
#                 return

#             if sum(comb) == target:
#                 cComb = comb.copy()
#                 res.append(cComb.copy())
#                 return

#             for i in candidates:
#                 comb.append(i)
#                 backTracking(comb)
#                 comb.pop()

#         backTracking([])

#         return res

class Solution:
    def combinationSum(self, candidates, target):
        result = []
        candidates.sort()

        def backTracking(start, target, comb):
            if target == 0:
                result.append(comb[:])
                return

            for i in range(start, len(candidates)):
                if candidates[i] > target:
                    break  # No need to check further, as the array is sorted

                comb.append(candidates[i])
                backTracking(i, target - candidates[i], comb)
                comb.pop()

        backTracking(0, target, [])

        return result


sol = Solution()
print(sol.combinationSum([2, 3, 6, 7], 7))
