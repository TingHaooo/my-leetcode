class Solution:
    def destCity(self, paths):
        vertices = set()
        adj = {}

        for path in paths:
            a, b = path
            vertices.add(a)
            vertices.add(b)
            if a in adj:
                adj[a].append(b)
            else:
                adj[a] = [b]

        for v in vertices:
            if v not in adj:
                return v


sol = Solution()

print(sol.destCity([["B", "C"], ["D", "B"], ["C", "A"]]))
print(sol.destCity([["London", "New York"], [
      "New York", "Lima"], ["Lima", "Sao Paulo"]]))
