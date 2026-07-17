---
date: 2024-07-29
difficulty: Hard
num: 778
related_topics:
  - Array
  - BFS
  - Binary Search
  - DFS
  - Heap (Priority Queue)
  - Matrix
  - Union Find
return: Done
---

# Problem: 778. Swim In Rising Water

## Description
find num seconds to be able to travel from 0, 0 to end

## Approach / Thoughts
dijkstras to find shortest path

## Solution
```python
class Solution:
    def swimInWater(self, grid: List[List[int]]) -> int:
        N = len(grid)

        shortest = {}
        min_heap = [[grid[0][0], 0, 0]]

        while min_heap:
            h, r, c= heapq.heappop(min_heap)

            if (r, c) in shortest:
                continue
            shortest[(r, c)] = h

            for r2, c2 in [[r+1, c], [r-1, c], [r, c+1], [r, c-1]]:
                if 0 <= r2 < N and 0 <= c2 < N:
                    h2 = max(h, grid[r2][c2])
                    heapq.heappush(min_heap, [h2, r2, c2])
        return shortest[(N-1, N-1)]
```
