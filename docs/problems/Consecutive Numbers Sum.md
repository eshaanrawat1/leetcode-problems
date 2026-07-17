---
date: 2025-12-07
difficulty: Hard
num: 829
related_topics:
  - Enumeration
  - Math
return: Done
---

# Problem: 829. Consecutive Numbers Sum

## Description

## Approach / Thoughts
formula for arithmetic

k squared term, check all possible k values that satisfy valid formula

## Solution
```python
class Solution:
    def consecutiveNumbersSum(self, n: int) -> int:
        res = 0

        numer = 2*n
        for k in range(1, ceil(sqrt(2*n))):
            val = numer / k - k - 1
            val /= 2
            if val == int(val):
                res += 1
        return res
```
