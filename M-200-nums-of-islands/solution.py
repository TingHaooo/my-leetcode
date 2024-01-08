class Solution:
    def numIslands(self, grid):
        result = 0
        directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
        m = len(grid)
        n = len(grid[-1])
        visited = set()

        def dfs(p):
            row, col = p
            if 0 <= row < m and 0 <= col < n and grid[row][col] == "1" and (row, col) not in visited:
                visited.add((row, col))
                for d in directions:
                    dx, dy = d
                    dfs([row + dx, col + dy])

            return

        for r in range(m):
            for c in range(n):
                if grid[r][c] == "0" or (r, c) in visited:
                    continue

                result += 1
                dfs([r, c])

        return result


sol = Solution()

print(sol.numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]))

print(sol.numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]))


2

22 (2 2) 22
226 (2 26) (22 6) (2 2 6)


2 2 6
2 26
22 6
