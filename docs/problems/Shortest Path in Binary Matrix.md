---
date: 2024-06-23
difficulty: Medium
num: 1091
related_topics:
  - Array
  - BFS
  - Matrix
return: Done
---

# Problem: 1091. Shortest Path In Binary Matrix

## Description
find shortest path of all 0s

## Approach / Thoughts
bfs keep all valid 8 directions with level in the q

## Solution
```python
class Solution:
    def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:
        N = len(grid)

        if grid[0][0] or grid[N-1][N-1]:
            return -1

        q = deque([(0, 0, 1)])
        visit = set()

        while q:
            i, j, level = q.popleft()
            
            if i == N-1 and j == N-1:
                return level

            if (i, j) in visit:
                continue
            
            for x, y in ((i-1,j-1),(i-1,j),(i-1,j+1),(i,j-1),(i,j+1),(i+1,j-1),(i+1,j),(i+1,j+1)):
                if 0 <= x < N and 0 <= y < N and not grid[i][j]:
                    q.append((x, y, level + 1))

            visit.add((i, j))
        return -1  
```
