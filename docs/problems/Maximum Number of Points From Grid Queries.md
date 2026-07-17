---
date: 2025-03-27
difficulty: Hard
num: 2503
related_topics:
  - Array
  - BFS
  - Heap (Priority Queue)
  - Matrix
  - Sorting
  - Two-Pointer
  - Union Find
return: Done
---

# Problem: 2503. Maximum Number Of Points From Grid Queries

## Description
same, find number of connected cells that have value > query val

## Approach / Thoughts
sort queries and expand connected component as we go

keep track in a heap, if min val is too large then break

## Solution
```python
class Solution:
    def maxPoints(self, grid: List[List[int]], queries: List[int]) -> List[int]:
        new_queries = [[q, i] for i, q in enumerate(queries)]
        new_queries.sort()

        k = len(queries)
        res = [-1] * k

        self.cur_score = 0
        m, n = len(grid), len(grid[0])

        visit = [[0] * n for _ in range(m)]

        pq = [[grid[0][0], 0, 0]]
        visit[0][0] = -1

        def in_bounds(r, c):
            return 0 <= r < m and 0 <= c < n

        def expand(threshold):
            if threshold <= grid[0][0]:
                return 

            while pq:
                if pq[0][0] >= threshold:
                    return

                val, r, c = heapq.heappop(pq)
                self.cur_score += 1

                for nr, nc in [[r+1, c], [r-1, c], [r, c+1], [r, c-1]]:
                    if in_bounds(nr, nc) and visit[nr][nc] == 0:
                        visit[nr][nc] = -1
                        heapq.heappush(pq, (grid[nr][nc], nr, nc))

        for q, i in new_queries:
            expand(q)
            res[i] = self.cur_score
        return res
```
