---
date: 2025-08-14
difficulty: Easy
num: 342
related_topics:
  - Bit Manipulation
  - Math
  - Recursion
return: Done
---

# Problem: 342. Powers Of Four

## Description

## Approach / Thoughts
divide by 4

## Solution
```python
class Solution:
    def isPowerOfFour(self, n: int) -> bool:
        while n > 1:
            n /= 4
        return n == 1
```
