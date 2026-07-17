---
date: 2026-02-17
difficulty: Easy
num: 693
related_topics:
  - Bit Manipulation
  - Mid Level
return: Done
---

# Problem: 693. Binary Number With Alternating Bits

## Description

## Approach / Thoughts
shift bits and check

## Solution
```python
class Solution:
    def hasAlternatingBits(self, n: int) -> bool:
        prev = None

        while n:
            bit = n & 1
            if prev is not None:
                if prev == bit:
                    return False

            prev = bit       
            n >>= 1
        return True
```
