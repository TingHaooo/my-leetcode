class Solution:
    def longestCommonPrefix(self, strs):
        longestCommonPrefix = strs[0]

        for i in range(1, len(strs)):
            commonPrefix = ''
            for j in range(0, len(strs[i])):
                try:
                    if strs[i][j] == longestCommonPrefix[j]:
                        commonPrefix += strs[i][j]
                    
                    if strs[i][j] != longestCommonPrefix[j]:
                        break
                except IndexError:
                    break
            longestCommonPrefix = commonPrefix
                
        return longestCommonPrefix
    
sol = Solution()
print(sol.longestCommonPrefix(["flower","flow","flight"]))
print(sol.longestCommonPrefix(["ab", "a"]))