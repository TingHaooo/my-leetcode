class Solution:
    def buyChoco(self, prices, money):
        sorted_prices = sorted(prices)
        leftover = money - (sorted_prices[0] + sorted_prices[1])

        return leftover if leftover >= 0 else money
