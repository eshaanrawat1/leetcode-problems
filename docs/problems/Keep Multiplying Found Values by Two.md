---
date: 2025-11-18
difficulty: Easy
num: 2154
related_topics:
  - Array
  - Hash Table
  - Simulation
  - Sorting
return: Done
---

# Problem: 2154. Keep Multiplying Found Values By Two

## Description

## Approach / Thoughts
multiply

## Solution
```python
class Solution:
    def findFinalValue(self, nums: List[int], original: int) -> int:
        n = original
        s = set(nums)

        while n in s:
            n *= 2
        return n
```
