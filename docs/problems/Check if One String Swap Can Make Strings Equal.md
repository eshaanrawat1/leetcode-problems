---
date: 2025-02-04
difficulty: Easy
num: 1790
related_topics:
  - Counting
  - Hash Table
  - String
return: Done
---

# Problem: 1790. Check If One String Swap Can Make Strings Equal

## Description

## Approach / Thoughts
same letters length

up to 2 swaps

## Solution
```python
class Solution:
    def areAlmostEqual(self, s1: str, s2: str) -> bool:
        n = len(s1)
        if n != len(s2) or Counter(s1) != Counter(s2):
            return False

        swaps = 0
        for x, y in zip(s1, s2):
            if x != y:
                swaps += 1
        return swaps == 0 or swaps == 2
```
