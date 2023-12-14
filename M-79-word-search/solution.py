class Solution:
    directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]

    def bfs(self, board, word, p, path_set):
        if not len(word):
            return True
        r, c = p
        directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]

        for d_r, d_c in directions:
            row, col = r + d_r, c + d_c
            if 0 <= row < len(board) and 0 <= col < len(board[-1]) and board[row][col] == word[0] and (row, col) not in path_set:
                new_path_set = set(i for i in path_set)
                new_path_set.add((r, c))
                if self.bfs(board, word[1:], [row, col], new_path_set):
                    return True

        return False

    def exist(self, board, word):
        m = len(board)
        n = len(board[-1])
        board_word_dict = {}
        for r in range(0, m):
            for c in range(0, n):
                try:
                    board_word_dict[board[r][c]] += 1
                except KeyError:
                    board_word_dict[board[r][c]] = 1
        word_dict = {}
        for i in word:
            try:
                word_dict[i] += 1
            except KeyError:
                word_dict[i] = 1

        for key, value in word_dict.items():
            try:
                if board_word_dict[key] < value:
                    return False
            except:
                return False

        for r in range(0, m):
            for c in range(0, n):
                if board[r][c] == word[0]:
                    if self.bfs(board, word[1:], [r, c], set()):
                        return True

        return False


sol = Solution()

# print(sol.exist([["A", "B", "C", "E"], ["S", "F", "C", "S"],
#                  ["A", "D", "E", "E"]], "SEE"))
# print(sol.exist([["a", "b"]], "ab"))
# print(sol.exist([["aa"]], "aaa"))
print(sol.exist([["A", "A", "A", "A", "A", "A"], ["A", "A", "A", "A", "A", "A"], ["A", "A", "A", "A", "A", "A"], [
      "A", "A", "A", "A", "A", "A"], ["A", "A", "A", "A", "A", "A"], ["A", "A", "A", "A", "A", "A"]], "AAAAAAAAAAAAAAa"))
