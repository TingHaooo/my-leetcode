class Solution:
    def totalMoney(self, n: int) -> int:
        total = 0
        for i in range(0, n):
            total += ((i % 7) + 1) + (i // 7)

        return total


sol = Solution()
