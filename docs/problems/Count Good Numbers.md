---
date: 2025-04-12
difficulty: Medium
num: 1922
related_topics:
  - Math
  - Recursion
return: Done
---

# Problem: 1922. Count Good Numbers

## Description
same, even index must be even, odd index must be odd

## Approach / Thoughts
5 possible even spots, 4 for odds

5 ^ evens * 4 ^ odds, handle mod

## Solution
```python
class Solution:
    def countGoodNumbers(self, n: int) -> int:
        mod = 10 ** 9 + 7

        evens = n // 2 + 1 if n % 2 else n // 2
        odds = n // 2
        
        return (pow(5, evens, mod) * pow(4, odds, mod)) % mod
```
