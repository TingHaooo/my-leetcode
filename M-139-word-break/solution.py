class Solution:
    def wordBreak(self, s: str, wordDict):
        dp = [False] * len(s)
        for i in range(0, len(s)):
            for word in wordDict:
                if s[i + 1 - len(word): i + 1] == word and (i - len(word) == -1 or dp[i - len(word)]):
                    dp[i] = True
        return dp[-1]


solution = Solution()
print(solution.wordBreak("leetcode", ["leet", "code"]))
