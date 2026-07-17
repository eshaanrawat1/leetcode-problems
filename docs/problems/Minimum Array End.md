---
date: 2024-11-08
difficulty: Medium
num: 3133
related_topics:
  - Bit Manipulation
return: Review
---

# Problem: 3133. Minimum Array End

## Description
same, max bit end for and

## Approach / Thoughts
fill 0 bits and repeat process

## Solution
```python
class Solution:
    def minEnd(self, n: int, x: int) -> int:
        bx = bn = 1
        while bn < n:
            if not bx & x:
                if bn & (n - 1):
                    x += bx
                bn <<= 1
            bx <<= 1
        return x
```
