import math


class Solution:
    def evalRPN(self, tokens):
        s = []
        op = ['+', '-', '*', '/']
        for i in tokens:
            print(s)
            if i not in op:
                s.append(int(i))
            else:
                a = s.pop()
                b = s.pop()
                if i == '+':
                    s.append(b + a)
                elif i == '-':
                    s.append(b - a)
                elif i == '*':
                    s.append(math.ceil(b * a))
                else:
                    if abs(a) > abs(b):
                        s.append(0)
                    else:
                        s.append(b // a)
        return s[-1]


sol = Solution()

print(sol.evalRPN(["-78", "-33", "196", "+", "-19", "-", "115", "+", "-", "-99", "/", "-18", "8", "*", "-86", "-", "-", "16", "/", "26", "-14", "-", "-", "47", "-", "101", "-", "163", "*", "143", "-", "0", "-", "171", "+", "120", "*", "-60", "+", "156", "/", "173", "/", "-24", "11", "+", "21", "/", "*", "44", "*",
      "180", "70", "-40", "-", "*", "86", "132", "-84", "+", "*", "-", "38", "/", "/", "21", "28", "/", "+", "83", "/", "-31", "156", "-", "+", "28", "/", "95", "-", "120", "+", "8", "*", "90", "-", "-94", "*", "-73", "/", "-62", "/", "93", "*", "196", "-", "-59", "+", "187", "-", "143", "/", "-79", "-89", "+", "-"]))