---
date: 2026-01-13
difficulty: Medium
num: 3453
related_topics:
  - Array
  - Binary Search
return: Done
---

# Problem: 3453. Separate Squares I

## Description

## Approach / Thoughts
binary search on line pos, if area above > below move up else move down

## Solution
```python
class Solution:
    def separateSquares(self, squares: List[List[int]]) -> float:
        
        def calc(y):
            area_above = area_below = 0

            for x0, y0, l in squares:
                if y0 >= y:
                    area_above += l*l
                elif y0+l <= y:
                    area_below += l*l
                else:
                    area_above += (y0+l - y) * l
                    area_below += (y-y0) * l
            return (area_above - area_below)

        l = float(min(y for _, y, _ in squares))
        r = float(max(y+l for _, y, l in squares))

        while r - l > 1e-6:
            m = (l + r) / 2
            if calc(m) > 0:
                l = m
            else:
                r = m
        return l
```
