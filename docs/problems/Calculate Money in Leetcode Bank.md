---
date: 2025-10-24
difficulty: Easy
num: 1716
related_topics:
  - Math
return: Done
---

# Problem: 1716. Calculate Money In Leetcode Bank

## Description
same, streaks of 7, starting num inc by 1 every step

## Approach / Thoughts
keep track of mod and increment start

## Solution
```python
class Solution:
    def totalMoney(self, n: int) -> int:
        prv_monday = res = 0
        cur = 1

        for i in range(1, n+1):
            if i % 7 == 1:
                prv_monday += 1
                cur = prv_monday
            res += cur
            cur += 1
        return res
```
