---
date: 2024-06-26
difficulty: Hard
num: 149
related_topics:
  - Array
  - Geometry
  - Hash Table
  - Math
return: Done
---

# Problem: 149. Max Points On A Line

## Description

## Approach / Thoughts
slope and y intercept

## Solution
```python
class Solution:
    def maxPoints(self, points: List[List[int]]) -> int:
        def find_slope(x1, x2, y1, y2):
            if (x2 - x1) == 0:
                return float("inf")
            return (y2 - y1) / (x2 - x1)
        
        def find_y_intercept(y, m, x):
            if m == float("inf") or m == float("-inf"):
                return x

            return y - m * x

        slopes = defaultdict(set)
        for i in range(len(points)):
            x1, y1 = points[i]
            for j in range(i+1, len(points)):
                x2, y2 = points[j]

                m = find_slope(x1, x2, y1, y2)
                b = find_y_intercept(y1, m, x1)

                slopes[(m, b)].add((x1, y1))
                slopes[(m, b)].add((x2, y2))
            
        max_len = 1
        for val in slopes.values():
            V = len(val)
            if V > max_len:
                max_len = V
        return max_len
```
