# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, preorder, inorder):
        # preorder m -> l -> r
        # inorder l -> m -> r
        root = TreeNode(preorder[0])

        def bindTreeNode(root, index):
            if len(preorder) <= index:
                return

            value = preorder[index]
            curRoot = root

            while curRoot:
                if inorder.index(root.val) > inorder.index(value):
                    curRoot.left = TreeNode(value)

        bindTreeNode(root, 1)

        return root
