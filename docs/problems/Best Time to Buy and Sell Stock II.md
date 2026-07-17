---
date: 2024-07-16
difficulty: Medium
num: 122
related_topics:
  - Array
  - Dynamic Programming
  - Greedy
return: Done
---

# Problem: 122. Best Time To Buy And Sell Stock Ii

## Description
same, can keep buying and selling

## Approach / Thoughts
walk all upwards lines from low to high

## Solution
```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        i = profit = 0
        while i < len(prices):
            j = i + 1
            prev = prices[i]
            while j < len(prices) and prices[j] > prev:
                profit += prices[j] - prev
                prev = prices[j]
                j += 1
            i = j
        return profit
```
