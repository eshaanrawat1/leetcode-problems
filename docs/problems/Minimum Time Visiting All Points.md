---
date: 2026-01-12
difficulty: Easy
num: 1266
related_topics:
  - Array
  - Geometry
  - Math
return: Done
---

# Problem: 1266. Minimum Time Visiting All Points

## Description

## Approach / Thoughts
chebyshev dist

## Solution
```python
class Solution:
    def minTimeToVisitAllPoints(self, points: List[List[int]]) -> int:
        
        def dist(x1, y1, x2, y2):
            m1 = abs(x2-x1)
            m2 = abs(y2-y1)
            return m1+m2-min(m1,m2)
        
        res = 0
        n = len(points)
        for i in range(1, n):
            res += dist(*points[i], *points[i-1])
        return res
```
