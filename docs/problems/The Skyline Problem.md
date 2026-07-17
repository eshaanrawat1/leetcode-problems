---
date: 2025-11-24
difficulty: Hard
num: 218
related_topics:
  - Array
  - Binary Indexed Tree
  - Divide and Conquer
  - Heap (Priority Queue)
  - Line Sweep
  - Ordered Set
  - Segment Tree
  - Sorting
return: Review
---

# Problem: 218. The Skyline Problem

## Description

## Approach / Thoughts
lazy heap - potential skyline changes are l and r of buildings

keep track of possible building candidates (overlap)

lazy pop buildings we passed (right side is < current point)

## Solution
```python
class Solution:
    def getSkyline(self, buildings: List[List[int]]) -> List[List[int]]:
        pq = []
        res = []
        i, n = 0, len(buildings)

        points = set()
        for l, r, h in buildings:
            points.add(l)
            points.add(r)

        for p in sorted(points):

            while i < n and buildings[i][0] <= p:
                l, r, h = buildings[i]
                heapq.heappush(pq, (-h, l, r))
                i += 1

            while pq and pq[0][2] <= p:
                heapq.heappop(pq)

            max_height = -pq[0][0] if pq else 0

 
            if res and res[-1][1] == max_height:
                continue
            res.append([p, max_height])
            
        return res
       
```
