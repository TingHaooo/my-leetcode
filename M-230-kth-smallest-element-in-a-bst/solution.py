# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def kthSmallest(self, root, k):
        self.res = None
        self.k = k

        def kthSmallestValue(root):
            if not root:
                return

            kthSmallestValue(root.left)
            self.k -= 1
            if self.k == 0:
                self.res = root.val
            kthSmallestValue(root.right)

        kthSmallestValue(root)

        return self.res
