---
date: 2024-05-15
difficulty: Medium
num: 2812
related_topics:
  - Array
  - BFS
  - Binary Search
  - Matrix
  - Union Find
return: Done
---

# Problem: 2812. Find The Safest Path In A Grid

## Description
find min path from 1s

## Approach / Thoughts
find min dists with multi source bfs

use maxheap to calculate min max distances of all neighbors

## Solution
```python
class Solution:
    def maximumSafenessFactor(self, grid: List[List[int]]) -> int:
        N = len(grid)

        def in_bounds(r, c):
            return not (r < 0 or c < 0 or r >= N or c >= N)

        def store_dist():
            q = deque()
            min_dist = {}

            for r in range(N):
                for c in range(N):
                    if grid[r][c] == 1:
                        q.append((r, c, 0))
                        min_dist[(r, c)] = 0
            
            while q:
                for i in range(len(q)):
                    r, c, dist = q.popleft()
                    nei = [[r+1, c], [r-1, c], [r, c+1], [r, c-1]]
                    for r2, c2 in nei:
                        if in_bounds(r2, c2) and (r2, c2) not in min_dist:
                            min_dist[(r2, c2)] = dist + 1
                            q.append([r2, c2, dist + 1])
            return min_dist

        min_dist = store_dist()
        maxHeap = [(-min_dist[(0, 0)], 0, 0)]
        visited = {(0, 0)}
        while maxHeap:
            dist, r, c = heapq.heappop(maxHeap)
            dist *= -1

            if (r, c) == (N-1, N-1):
                return dist

            nei = [[r+1, c], [r-1, c], [r, c+1], [r, c-1]]
            for r2, c2 in nei:
                if in_bounds(r2, c2) and (r2, c2) not in visited:
                    visited.add((r2, c2))
                    d = min(dist, min_dist[(r2, c2)])
                    heapq.heappush(maxHeap, (-d, r2, c2))
        
        return -1
```
