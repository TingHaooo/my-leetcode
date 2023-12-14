class Solution:
    def rotate(self, matrix) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """

        matrix_clone = [row[:] for row in matrix]
        m = len(matrix_clone)
        n = len(matrix_clone[0])

        for c in range(0, n):
            for r in range(0, m):
                matrix[r][c] = matrix_clone[-1 - c][r]

        return matrix


sol = Solution()

print(sol.rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
