class Node:
    def __init__(self, val, children, is_terminal=False):
        self.val = val
        self.children = children
        self.is_terminal = is_terminal


class WordDictionary:

    def __init__(self):
        self.root = Node("root", {})

    def addWord(self, word: str) -> None:
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


# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary()
# obj.addWord(word)
# param_2 = obj.search(word)
