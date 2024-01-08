class Solution:

    def binary_search(self, arr, target):
        l, r = 0, len(arr)
        while l < r:
            m = l + (r - l) // 2
            if (arr[m] > arr[0] and target < arr[m]) or (arr[m] < arr[-1] and not arr[m] <= target < arr[-1]):
                r = m
            else:
                l = m + 1

        return l

    def search(self, nums, target):
        pass


sol = Solution()

print(sol.binary_search([4, 5, 6, 7, 0, 1, 2], 2))
print(sol.binary_search([7, 1, 2, 3, 4, 5, 6], 5))
print(sol.binary_search([4, 5, 6, 7, 8, 0, 1, 2], 4))
