---
date: 2025-07-05
difficulty: Medium
num: 3603
related_topics:
  - BFS
  - Graph
return: Done
---

# Problem: 3603. Minimum Cost Path With Alternating Directions Ii

## Description
same, can move at odd seconds, wait at even seconds

## Approach / Thoughts
account for cost of waiting when pushing neighbors, dijkstras

## Solution
```python
class Solution:
    def minCost(self, m: int, n: int, waitCost: List[List[int]]) -> int:
        
        def in_bounds(r, c):
            return 0 <= r < m and 0 <= c < n

        pq = [[1, 0, 0]]
        visit = [[0] * n for _ in range(m)]

        while pq:
            t, r, c = heapq.heappop(pq)

            if r == m-1 and c == n-1:
                return t

            for nr, nc in [[r+1, c], [r, c+1]]:
                if in_bounds(nr, nc) and visit[nr][nc] == 0:
                    visit[nr][nc] = 1

                    move_cost = (nr + 1) * (nc + 1)
                    wait_cost = waitCost[nr][nc]

                    if nr == m-1 and nc == n-1:
                        wait_cost = 0

                    heapq.heappush(pq, [t + move_cost + wait_cost, nr, nc])
```
