# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def tree2str(self, root) -> str:
        if not root:
            return ""
        output = str(root.val)
        leftStr = ""
        rightStr = ""

        if root.left:
            leftStr = "(" + self.tree2str(root.left) + ")"
        if not root.left and root.right:
            leftStr = "()"
        if root.right:
            rightStr = "(" + self.tree2str(root.right) + ")"

        return output + leftStr + rightStr


sol = Solution()

print(sol.tree2str([1, 2, 3, 4]))  # "1(2(4))(3)"
