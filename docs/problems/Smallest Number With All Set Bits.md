---
date: 2024-12-02
difficulty: Easy
num: 3370
related_topics:
  - Bit Manipulation
return: Done
---

# Problem: 3370. Smallest Number With All Set Bits

## Description

## Approach / Thoughts
flip bits

## Solution
```python
class Solution:
    def smallestNumber(self, n: int) -> int:
        return sum(2**i for i in range(len(bin(n)[2:])))
```
