---
date: 2024-02-18
difficulty: Easy
num: 231
related_topics:
  - Bit Manipulation
  - Math
  - Recursion
return: Done
---

# Problem: 231. Power Of Two

## Description
Return true if n is a power of two, false otherwise

## Approach / Thoughts
Divide n until it cannot be divided anymore

If it is 1, return true, else false

## Solution
```python
class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        while n > 1:
            n /= 2
        
        return n == 1
```
