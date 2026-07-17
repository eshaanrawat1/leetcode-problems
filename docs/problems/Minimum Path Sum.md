---
date: 2024-08-01
difficulty: Medium
num: 64
related_topics:
  - Array
  - Dynamic Programming
  - Matrix
return: Done
---

# Problem: 64. Minimum Path Sum

## Description

## Approach / Thoughts
djikstras

## Solution
```python
class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        ROWS, COLS = len(grid), len(grid[0])

        shortest = {}

        min_heap = [[grid[0][0], 0, 0]]
        while min_heap:
            amt, r, c = heapq.heappop(min_heap)

            if (r, c) in shortest:
                continue
            shortest[(r, c)] = amt

            for x, y in [[r+1, c], [r, c+1]]:
                if 0 <= x < ROWS and 0 <= y < COLS:
                    heapq.heappush(min_heap, [amt+grid[x][y], x, y])
        return shortest[(ROWS-1, COLS-1)]
```
