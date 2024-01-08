# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root, dept=0):
        if root is None:
            return dept

        return max(self.maxDepth(root.left, dept + 1), self.maxDepth(root.right, dept + 1))
