---
date: 2023-12-19
difficulty: Easy
num: 2706
related_topics:
  - Array
  - Sorting
return: Done
---

# Problem: 2706. Buy Two Chocolates

## Description
Buy the two cheapest chocolates if possible, otherwise return the money.

## Approach / Thoughts
Sort the money and return the sums of the first two indices.

## Solution
```python
class Solution:
    def buyChoco(self, prices: List[int], money: int) -> int:
        prices.sort()

        if prices[0] + prices[1] > money:
            return money
        return money - (prices[0] + prices[1])
```
