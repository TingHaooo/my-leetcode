class Solution:
    def lengthOfLongestSubstring(self, s):
        start = maxLength = 0
        usedChar = {}
        for i in range(len(s)):
            if s[i] in usedChar and start <= usedChar[s[i]]:
                start = usedChar[s[i]] + 1
            else:
                maxLength = max(maxLength, i - start + 1)

            usedChar[s[i]] = i

        return maxLength

sol = Solution()

print(sol.lengthOfLongestSubstring(' ')) #1
print(sol.lengthOfLongestSubstring('aab')) #2
print(sol.lengthOfLongestSubstring('abba')) #2
print(sol.lengthOfLongestSubstring('abc')) #3
print(sol.lengthOfLongestSubstring('bbbbb')) #1
print(sol.lengthOfLongestSubstring("abca cddd")) #3
print(sol.lengthOfLongestSubstring('pwwpas')) #4