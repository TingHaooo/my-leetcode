class Solution:
    def imageSmoother(self, img):
        directions = [[-1, -1], [-1, 0], [-1, 1], [0, 1],
                      [1, -1], [1, 0], [1, 1], [0, -1]]

        m = len(img)
        n = len(img[-1])

        result = [[0 for _ in range(n)] for _ in range(m)]

        for r in range(m):
            for c in range(n):
                length = 1
                total = img[r][c]
                for dx, dy in directions:
                    row = r + dx
                    col = c + dy
                    if 0 <= row < m and 0 <= col < n:
                        length += 1
                        total += img[row][col]

                result[r][c] = total // length

        return result


sol = Solution()

# print(sol.imageSmoother([[1, 1, 1], [1, 0, 1], [1, 1, 1]]))
print(sol.imageSmoother([[100, 200, 100], [200, 50, 200], [100, 200, 100]]))
