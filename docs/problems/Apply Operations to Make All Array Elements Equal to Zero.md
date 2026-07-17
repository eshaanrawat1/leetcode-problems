---
date: 2026-02-12
difficulty: Medium
num: 2772
related_topics:
  - Array
  - Prefix Sum
  - Staff
return: Done
---

# Problem: 2772. Apply Operations To Make All Array Elements Equal To Zero

## Description

## Approach / Thoughts
check rollover prefix, case where dec too much and case where can’t start a valid operation

## Solution
```python
from sortedcontainers import SortedSet

class Solution:
    def checkArray(self, nums: List[int], k: int) -> bool:
        n = len(nums)

        ss = SortedSet()
        ps = 0

        for i, v in enumerate(nums):
            if ss and ss[0][0] == i:
                _, y = ss.pop(0)
                ps -= y

            diff = v - ps
            if diff > 0 and i > n-k:
                return False

            if diff > 0:
                ss.add((i+k, diff))
                ps += diff

            if v - ps != 0:
                return False
        return True
```
