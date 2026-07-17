---
date: 2025-08-14
difficulty: Easy
num: 326
related_topics:
  - Math
  - Recursion
return: Done
---

# Problem: 326. Power Of Three

## Description

## Approach / Thoughts
divide

## Solution
```python
class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        while n > 1:
            n /= 3
        return n == 1
```
