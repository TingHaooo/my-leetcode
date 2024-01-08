class Solution:
    def maxScore(self, s: str) -> int:
        result = 0
        for i in range(0, len(s) - 1):
            l = s[:i+1]
            r = s[i+1:]
            result = max(result, l.count("0") + r.count("1"))

        return result


sol = Solution()

print(sol.maxScore("011101"))
print(sol.maxScore("00111"))
print(sol.maxScore("1111"))
print(sol.maxScore("00"))
