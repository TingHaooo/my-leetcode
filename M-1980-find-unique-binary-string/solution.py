class Solution:
    def findDifferentBinaryString(self, nums: List[str]) -> str:
        max_len = len(nums[0])
        s = set([int(n, 2) for n in nums])

        for i in range(pow(2, max_len)):
            if i not in s:
                r = bin(i)[2:]
                return '0' * (max_len - len(r)) + r

        return -1
