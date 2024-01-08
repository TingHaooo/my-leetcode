# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root):
        self.last = None
        self.isValid = True

        def inOrderTraversal(root):
            if not root:
                return
            inOrderTraversal(root.left)

            if self.last is None:
                self.last = root.val
            else:
                if self.last >= root.val:
                    self.isValid = False
                self.last = root.val

            inOrderTraversal(root.right)

        inOrderTraversal(root)
        return self.isValid
