---
date: 2025-12-02
difficulty: Medium
num: 3623
related_topics:
  - Array
  - Geometry
  - Hash Table
  - Math
return: Done
---

# Problem: 3623. Count Number Of Trapezoids I

## Description
horizontal triangles

## Approach / Thoughts
store horizontal points same y val, comb 2 gets ways

accumulate with all prev, running sum

## Solution
```python
class Solution:
    def countTrapezoids(self, points: List[List[int]]) -> int:
        mod = 10**9+7
        cnt = Counter(y for x,y in points)
        points_before = res = 0

        for pt in cnt.values():
            if pt == 1:
                continue
            
            ways = comb(pt, 2)
            res = (res + ways * points_before) % mod
            points_before += ways
        return res
```
