---
date: 2025-01-19
difficulty: Hard
num: 407
related_topics:
  - Array
  - BFS
  - Heap (Priority Queue)
  - Matrix
return: Review
---

# Problem: 407. Trapping Rain Water Ii

## Description
same, 3d pools of water

## Approach / Thoughts
start from boundaries, keep track of max height

when a cell is inwards, max height is constraint

proof by bfs of max reaching that cell faster

## Solution
```python
class Solution:
    def trapRainWater(self, heightMap: List[List[int]]) -> int:
        m, n = len(heightMap), len(heightMap[0])
        visit = [[0] * n for _ in range(m)]

        pq = []
        for r in range(m):
            for c in range(n):
                if r == 0 or r == m - 1 or c == 0 or c == n - 1:
                    pq.append((heightMap[r][c], r, c))
                    visit[r][c] = 1
        heapq.heapify(pq)

        vol = maxh = 0
        while pq:
            h1, r1, c1 = heapq.heappop(pq)
            maxh = max(maxh, h1)

            vol += maxh - h1

            for r2, c2 in [[r1+1, c1], [r1-1, c1], [r1, c1+1], [r1, c1-1]]:
                if 0 <= r2 < m and 0 <= c2 < n:
                    if visit[r2][c2] == 0:
                        visit[r2][c2] = 1
                        heapq.heappush(pq, (heightMap[r2][c2], r2, c2))
        return vol
```
