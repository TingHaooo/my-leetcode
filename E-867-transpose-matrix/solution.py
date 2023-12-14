class Solution:
    def transpose(self, matrix):
        m = len(matrix)
        n = len(matrix[0])

        result = [[0 for i in range(m)] for j in range(n)]
        for r in range(0, m):
            for c in range(0, n):
                result[c][r] = matrix[r][c]

        return result


sol = Solution()

print(sol.transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
print(sol.transpose([[1, 2, 3], [4, 5, 6]]))
