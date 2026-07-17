---
date: 2024-11-06
difficulty: Medium
num: 2275
related_topics:
  - Array
  - Bit Manipulation
  - Counting
  - Hash Table
return: Done
---

# Problem: 2275. Largest Combination With Bitwise And Greater Than Zero

## Description

## Approach / Thoughts
count each bit position max shared elements

## Solution
```python
class Solution:
    def largestCombination(self, candidates: List[int]) -> int:

        def bit_count(pos):
            res = 0
            for c in candidates:
                if (1 << pos) & c:
                    res += 1
            return res
        
        res = 0
        for i in range(31):
            res = max(res, bit_count(i))
        return res
```
