class Solution:
    def largestOddNumber(self, num: str) -> str:
        for i in range(len(num) - 1, -1, -1):
            if int(num[i]) % 2 == 1:
                return num[0: i + 1]
        return ""


sol = Solution()
print(sol.largestOddNumber("52"))  # "5"
print(sol.largestOddNumber("4206"))  # ""
print(sol.largestOddNumber("35427"))  # "35427"
