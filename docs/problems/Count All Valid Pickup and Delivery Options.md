---
date: 2024-11-06
difficulty: Hard
num: 1359
related_topics:
  - Combinatorics
  - Dynamic Programming
  - Math
return: Done
---

# Problem: 1359. Count All Valid Pickup And Delivery Options

## Description
same, d come after p

## Approach / Thoughts
count combinations with remaining slots

## Solution
```python
class Solution:
    def countOrders(self, n: int) -> int:
        res, x, y = 1, n, n * 2 - 1
        for i in range(n, 0, -1):
            res *= (x * y)
            x -= 1
            y -= 2
        return res % (10 ** 9 + 7)
```
