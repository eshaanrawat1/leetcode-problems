---
date: 2025-05-30
difficulty: Medium
num: 50
related_topics:
  - Math
  - Recursion
return: Done
---

# Problem: 50. Pow(X, N)

## Description

## Approach / Thoughts
handle edge cases like 0s and account for negative powers

fast powers and cache

## Solution
```python
class Solution:
    def myPow(self, x: float, n: int) -> float:
        if x == 0: return 0
        if n == 0: return 1

        @lru_cache(None)
        def custom_pow(x, n):
            if n == 1:
                return x
            if n == 2:
                return x * x

            if n % 2 == 0:
                return custom_pow(x, n//2) * custom_pow(x, n // 2)
            else:
                return x * custom_pow(x, n-1)

        if n < 0:
            return 1 / (custom_pow(x, -1 * n))
        
        return custom_pow(x, n)
```
