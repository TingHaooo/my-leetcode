# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root):
        if not root:
            return []

        output = []
        q = [[0, root]]

        while len(q):
            level, node = q.pop()
            try:
                output[level].append(node.val)
            except IndexError:
                output.append([node.val])

            if node.right:
                q.append([level + 1, node.right])
            if node.left:
                q.append([level + 1, node.left])

        return output
