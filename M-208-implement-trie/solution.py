class Node:
    def __init__(self, val, children, is_terminal=False):
        self.val = val
        self.children = children
        self.is_terminal = is_terminal


class Trie:

    def __init__(self):
        self.root = Node("root", {})

    # def __str__(self):
    #     return self._str_helper(self.root)

    # def _str_helper(self, node, depth=0):
    #     if not node:
    #         return ""

    #     result = "  " * depth + f"{node.val}\n"
    #     for n in node.children.values():
    #         result += self._str_helper(n, depth + 1)

    #     return result

    def insert(self, word: str) -> None:
        cur = self.root
        for i in range(len(word)):
            s = word[i]
            if s not in cur.children:
                cur.children[s] = Node(s, {})
            n = cur.children[s]
            if i == len(word) - 1:
                n.is_terminal = True
            cur = n
        return

    def search(self, word: str) -> bool:
        exist = True
        cur = self.root
        for i in range(len(word)):
            s = word[i]
            if s not in cur.children:
                exist = False
                break
            cur = cur.children[s]
            if i == len(word) - 1 and not cur.is_terminal:
                exist = False
        return exist

    def startsWith(self, prefix: str) -> bool:
        exist = True
        cur = self.root
        for i in range(len(prefix)):
            s = prefix[i]
            if s not in cur.children:
                exist = False
                break
            cur = cur.children[s]
        return exist


# Your Trie object will be instantiated and called as such:
trie = Trie()
trie.insert("apple")
print(trie.search("apple"))   # return True
print(trie.search("app"))    # return False
print(trie.startsWith("app"))  # return True
trie.insert("app")
print(trie.search("app"))     # return True
