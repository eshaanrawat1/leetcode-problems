---
date: 2024-11-24
difficulty: Hard
num: 2617
related_topics:
  - Array
  - BFS
  - Dynamic Programming
  - Heap (Priority Queue)
  - Matrix
  - Monotonic Stack
  - Stack
  - Union Find
return: Review
---

# Problem: 2617. Minimum Number Of Visited Cells In A Grid

## Description

## Approach / Thoughts
bfs + sortedlist

keep track of unvisited positions and push to queue

## Solution
```python
from sortedcontainers import SortedList

class Solution:
    def minimumVisitedCells(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])

        row_sets = [SortedList(range(n)) for _ in range(m)]
        col_sets = [SortedList(range(m)) for _ in range(n)]

        q = deque([(0, 0, 1)])
        while q:
            i, j, steps = q.popleft()
            if i == m - 1 and j == n - 1:
                return steps

            for k in list(row_sets[i].irange(j+1, min(grid[i][j]+j+1, n)-1)):
                q.append((i, k, steps+1))
                row_sets[i].remove(k)
                col_sets[k].remove(i)
            
            for k in list(col_sets[j].irange(i+1, min(grid[i][j]+i+1, m)-1)):
                q.append((k, j, steps+1))
                row_sets[k].remove(j)
                col_sets[j].remove(k)
        return -1
```
