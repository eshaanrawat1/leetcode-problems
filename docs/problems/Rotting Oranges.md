---
date: 2024-05-17
difficulty: Medium
num: 994
related_topics:
  - Array
  - BFS
  - Matrix
return: Done
---

# Problem: 994. Rotting Oranges

## Description
find time for rotting oranges

## Approach / Thoughts
multi source bfs keep track of fresh oranges

## Solution
```python
class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        ROWS, COLS = len(grid), len(grid[0])

        def in_bounds(r, c):
            if (r < 0 or c < 0 or r == ROWS or c == COLS):
                return False
            return True

        fresh = 0
        q = deque([])
        visited = set()
        for r in range(ROWS):
            for c in range(COLS):
                if grid[r][c] == 1:
                    fresh += 1
                if grid[r][c] == 2:
                    q.append((r, c))
                    visited.add((r, c))

        minutes = 0
        while fresh > 0 and q:
            for i in range(len(q)):
                r, c = q.popleft()
                grid[r][c] = 2

                neighbors = [[r+1, c], [r-1, c], [r, c+1], [r, c-1]]
                for row, col in neighbors:
                    if in_bounds(row, col) and (row, col) not in visited:
                        if grid[row][col] == 1:
                            q.append((row, col))
                            visited.add((row, col))
                            fresh -= 1
            minutes += 1
        return minutes if fresh == 0 else -1    
```
