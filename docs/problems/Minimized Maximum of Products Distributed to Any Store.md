---
date: 2024-11-14
difficulty: Medium
num: 2064
related_topics:
  - Array
  - Binary Search
return: Review
---

# Problem: 2064. Minimized Maximum Of Products Distributed To Any Store

## Description

## Approach / Thoughts
fr just copied to keep the streak lol - come back when not so busy

## Solution
```python
class Solution:
    def minimizedMaximum(self, n, Q):
        beg, end = 0, max(Q)
        
        while beg + 1 < end:
            mid = (beg + end)//2
            if sum(ceil(i/mid) for i in Q) <= n:
                end = mid
            else:
                beg = mid
        
        return end
```
