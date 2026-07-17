---
date: 2025-11-23
difficulty: Hard
num: 1515
related_topics:
  - Array
  - Geometry
  - Math
  - Randomized
return: Done
---

# Problem: 1515. Best Position For A Service Centre

## Description

## Approach / Thoughts
gradient descent, start with centroid

climb down with smaller step sizes

## Solution
```python
class Solution:
    def getMinDistSum(self, positions: List[List[int]]) -> float:
        dist = lambda x, y: sum(sqrt((x-xx)**2 + (y-yy)**2) for xx, yy in positions)

        n = len(positions)
        x = sum(x for x, _ in positions) / n
        y = sum(y for _, y in positions) / n
        cur_dist = dist(x, y)

        dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]
        chg = 100

        while chg > 1e-6:
            flag = True
            for dx, dy in dirs:
                xt = x + chg * dx
                yt = y + chg * dy
                new_dist = dist(xt, yt)

                if new_dist < cur_dist:
                    cur_dist = new_dist
                    x = xt
                    y = yt
                    flag = False
                    break

            if flag:
                chg /= 2

        return cur_dist
```
