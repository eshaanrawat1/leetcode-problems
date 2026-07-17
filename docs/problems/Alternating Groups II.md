---
date: 2026-02-04
difficulty: Medium
num: 3208
related_topics:
  - Array
  - Sliding Window
  - Staff
return: Done
---

# Problem: 3208. Alternating Groups Ii

## Description

## Approach / Thoughts
count and reset count

## Solution
```python
class Solution:
    def numberOfAlternatingGroups(self, colors: List[int], k: int) -> int:
        n = len(colors)
        colors += colors

        res = cnt = 0
        for i in range(1, n+k):
            if colors[i] != colors[i-1]:
                cnt += 1
            else:
                cnt = 1
            res += (cnt >= k)
        return res
```
