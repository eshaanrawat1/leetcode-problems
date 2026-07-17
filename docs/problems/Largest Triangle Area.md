---
date: 2025-09-27
difficulty: Easy
num: 812
related_topics:
  - Array
  - Geometry
  - Math
return: Done
---

# Problem: 812. Largest Triangle Area

## Description

## Approach / Thoughts
3 points, get side length with dist formula, herons with 3 sides

## Solution
```python
class Solution:
    def largestTriangleArea(self, points: List[List[int]]) -> float:
        
        def dist(x1, y1, x2, y2):
            return sqrt((x2 - x1)**2 + (y2 - y1)**2)

        def area(a, b, c):
            s = (a + b + c) / 2
            return sqrt(abs(s * (s-a) * (s-b) * (s-c)))
        
        n = len(points)
        res = 0

        for i in range(n):
            x1, y1 = points[i]
            for j in range(i+1, n):
                x2, y2 = points[j]
                for k in range(j+1, n):
                    x3, y3 = points[k]

                    a = dist(x1, y1, x2, y2)
                    b = dist(x2, y2, x3, y3)
                    c = dist(x1, y1, x3, y3)

                    res = max(area(a, b, c), res)
        return res

        
```
