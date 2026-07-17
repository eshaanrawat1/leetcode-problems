---
date: 2025-09-25
difficulty: Medium
num: 1124
related_topics:
  - Array
  - Hash Table
  - Monotonic Stack
  - Prefix Sum
  - Stack
return: Done
---

# Problem: 1124. Longest Well Performing Interval

## Description
same, where days > 8 is more than days < 8

## Approach / Thoughts
keep track of first occurrence of prefix sum that is cur-1 which gives the first positive interval

## Solution
```python
class Solution:
    def longestWPI(self, hours: List[int]) -> int:

        ps = []
        for h in hours:
            val = (1 if h > 8 else -1)
            if ps:
                ps.append(ps[-1] + val)
            else:
                ps.append(val)

        res = 0
        seen = {}

        for i, v in enumerate(ps):
            if v > 0:
                res = i+1
            else:
                if v-1 in seen:
                    res = max(res, i - seen[v-1])

            if v not in seen:
                seen[v] = i   

        return res
```
