---
date: 2023-12-22
difficulty: Easy
num: 1496
related_topics:
  - Hash Table
  - String
return: Done
---

# Problem: 1496. Path Crossing

## Description
Given a string of cardinal directions, find if a path crosses itself. Assume start is origin.

## Approach / Thoughts
Have a set that stores all points, initially containing the origin. If a direction is made, such as N, then update the point we are currently at and add it, check if already in set.

## Solution
```python
class Solution:
    def isPathCrossing(self, path: str) -> bool:
        vert, horiz = 0, 0 
        points = set()
        points.add((0,0))

        for d in path:
            if d == 'N':
                vert += 1
            elif d == 'S':
                vert -= 1
            elif d == 'E':
                horiz += 1
            else:
                horiz -= 1

            point = (horiz, vert)

            if point in points:
                return True
            points.add(point)
        
        return False
```
