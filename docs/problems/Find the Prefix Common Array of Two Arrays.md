---
date: 2025-01-13
difficulty: Medium
num: 2657
related_topics:
  - Array
  - Bit Manipulation
  - Hash Table
return: Done
---

# Problem: 2657. Find The Prefix Common Array Of Two Arrays

## Description

## Approach / Thoughts
accumulate count of twos seen array

## Solution
```python
class Solution:
    def findThePrefixCommonArray(self, A: List[int], B: List[int]) -> List[int]:
        seen = [0] * 51

        res, cnt = [], 0
        for x, y in zip(A, B):
            seen[x] += 1
            seen[y] += 1


            if x != y and seen[x] == 2:
                cnt += 1
            if x != y and seen[y] == 2:
                cnt += 1
            if x == y and seen[x] == 2:
                cnt += 1

            res.append(cnt)
        return res
```
