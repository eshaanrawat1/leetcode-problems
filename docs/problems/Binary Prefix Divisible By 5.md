---
date: 2025-11-23
difficulty: Easy
num: 1018
related_topics:
  - Array
  - Bit Manipulation
return: Done
---

# Problem: 1018. Binary Prefix Divisible By 5

## Description

## Approach / Thoughts
accumulate number with bit shifts

## Solution
```python
class Solution:
    def prefixesDivBy5(self, nums: List[int]) -> List[bool]:
        x = 0
        res = []
        for n in nums:
            x = ((x << 1) | n) % 5
            res.append(x%5==0)
        return res
```
