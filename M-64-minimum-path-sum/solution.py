class Solution:
    def minPathSum(self, grid):
        for i in range(0, len(grid)):
            for j in range(0, len(grid[0])):
                # compare top and left number, find min one and add it.
                top = None if i == 0 else grid[i - 1][j]
                left = None if j == 0 else grid[i][j - 1]
                if top is None and left is None:
                    continue
                
                if top is None and left is not None:
                    grid[i][j] += left
                elif left is None and top is not None:
                    grid[i][j] += top
                else:
                     grid[i][j] += min(top, left)   
        print(grid)
        return grid[-1][-1]


sol = Solution()
print(sol.minPathSum([[1,2,3],[4,5,6]])) 
                