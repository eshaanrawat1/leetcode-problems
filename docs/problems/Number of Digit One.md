---
date: 2025-01-09
difficulty: Hard
num: 233
related_topics:
  - Dynamic Programming
  - Math
  - Recursion
return: Review
---

# Problem: 233. Number Of Digit One

## Description

## Approach / Thoughts
number of 1s in each digit place, 3 cases 0, 1, >1

abc x def

## Solution
```python
class Solution:
    def countDigitOne(self, n: int) -> int:
        res, k = 0, 1
        while k <= n:
            left, rem = n // k, n % k
            x, y = left % 10, left // 10

            if x > 1:
                res += ((y + 1) * k)
                #       0-456 = 457 ways * k
            elif x == 1:
                #                # rem ways + 1 -> 0-22
                res += (y * k) + rem + 1
                #      abc * k ways -> ex: 456 * 1000
            else:
                res += (y * k)
                # 0 - 455 ways * k
            k *= 10
        return res
```
