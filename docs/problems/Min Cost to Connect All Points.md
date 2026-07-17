---
date: 2024-07-21
difficulty: Medium
num: 1584
related_topics:
  - Array
  - Graph
  - Minimum Spanning Tree
  - Union Find
return: Done
---

# Problem: 1584. Min Cost To Connect All Points

## Description

## Approach / Thoughts
adj list of all points to all points

greedy prims, pick best connection

break when all points are connected

## Solution
```python
class Solution:
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        adj = defaultdict(list)
        for i in range(len(points)):
            x1, y1 = points[i]
            for j in range(i+1, len(points)):
                x2, y2 = points[j]
                dist = abs(x2-x1) + abs(y2-y1)

                adj[(x1, y1)].append((x2, y2, dist))
                adj[(x2, y2)].append((x1, y1, dist))

        total = 0
        visit = set()
        x, y = points[0]
        
        min_heap = [[0, x, y]]
        while min_heap and len(visit) < len(points):
            dist, x1, y1 = heapq.heappop(min_heap)
            
            if (x1, y1) in visit:
                continue

            total += dist
            visit.add((x1, y1))

            for x2, y2, cost in adj[(x1, y1)]:
                heapq.heappush(min_heap, [cost, x2, y2])
        return total
```
