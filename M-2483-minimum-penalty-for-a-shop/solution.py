class Solution:
    def bestClosingTime(self, customers: str) -> int:
        str_len = len(customers)
        ln = customers.count('N')
        ry = 0
        best_time = ln + ry
        best_i = str_len

        for i in range(str_len - 1, -1, -1):
            if customers[i] == 'N':
                ln -= 1
            else:
                ry += 1

            if ln + ry <= best_time:
                best_time = ln + ry
                best_i = i

        return best_i
