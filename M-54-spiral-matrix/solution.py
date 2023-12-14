class Solution:
    def spiralOrder(self, matrix):
        m = len(matrix)
        n = len(matrix[0])

        if n == 1:
            return [r[0] for r in matrix]
        if m == 1:
            return matrix[0]

        result = []
        deep = 0
        x, y = 0, 0
        count = 0
        curDirection = 't'
        while count < (m * n):
            result.append(matrix[x][y])
            count += 1
            if curDirection == 't':
                y += 1
                if y == (n - deep - 1):
                    curDirection = 'r'
            elif curDirection == 'r':
                x += 1
                if x == (m - deep - 1):
                    curDirection = 'b'
            elif curDirection == 'b':
                y -= 1
                if y == (0 + deep):
                    curDirection = 'l'
            else:
                x -= 1
                if x == (0 + deep + 1):
                    curDirection = 't'
                    deep += 1

        return result


sol = Solution()

print(sol.spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
print(sol.spiralOrder([[3], [2]]))
print(sol.spiralOrder([[1, 2, 3, 4, 5]]))
print(sol.spiralOrder([[3]]))
