---
date: 2025-11-05
difficulty: Medium
num: 3723
related_topics:
  - Greedy
  - Math
return: Done
---

# Problem: 3723. Maximize Sum Of Squares Of Digits

## Description
same, n numbers sum to budget

## Approach / Thoughts
greedy, always take large numbers improve square by most

check if final sum is valid

## Solution
```python
class Solution:
    def maxSumOfSquares(self, num: int, budget: int) -> str:
        original = budget

        res = []
        for i in range(num):
            v = min(9, budget)
            res.append(str(v))
            budget -= v

        check = sum(int(c) for c in res)
        if check != original:
            return ""

        return ''.join(res)
```
