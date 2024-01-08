class Solution:
    def findDiagonalOrder(self, mat):
        m, n = len(mat), len(mat[-1])
        direction = [[-1, 1], [1, -1]]
        output = []
        curD = 0
        x, y = 0, 0

        while len(output) != m * n:
            if 0 <= x < m and 0 <= y < n:
                print(x, y)
                output.append(mat[x][y])

            else:
                print(x, y)
                print(curD)
                x -= direction[curD][0]
                y -= direction[curD][1]

                if 0 <= x + direction[curD][0] < m:
                    x += direction[curD][0]
                else:
                    y += direction[curD][1]
                print(x, y)
                output.append(mat[x][y])
                curD = 0 if curD else 1

            x += direction[curD][0]
            y += direction[curD][1]

        return output


sol = Solution()

print(sol.findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
