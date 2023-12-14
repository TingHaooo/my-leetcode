class Node:
    def __init__(self, val=0, neighbors=None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []


class Solution:
    def cloneGraph(self, node):
        if not node:
            return None

        q = [node]
        vertices = {}

        while len(q):
            v = q.pop()

            if v.val not in vertices:
                vertices[v.val] = Node(v.val, [])

            for neighbor in v.neighbors:
                if neighbor.val not in vertices:
                    vertices[neighbor.val] = Node(neighbor.val, [])
                    q.append(neighbor)
                vertices[v.val].neighbors.append(vertices[neighbor.val])

        return vertices[node.val]
