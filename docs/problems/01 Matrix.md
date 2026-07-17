---
date: 2024-07-17
difficulty: Medium
num: 542
related_topics:
  - Array
  - BFS
  - Dynamic Programming
  - Matrix
return: Done
---

# Problem: 542. Matrix

## Description
find closest distance to a 0

## Approach / Thoughts
multisource bfs from 0s

## Solution
```python
class Solution:
    def updateMatrix(self, mat: List[List[int]]) -> List[List[int]]:
        ROWS, COLS = len(mat), len(mat[0])

        q = deque([])
        visit = set()

        for r in range(ROWS):
            for c in range(COLS):
                if mat[r][c] == 0:
                    q.append([r, c, 0])

        while q:
            r, c, dist = q.popleft()

            if (r, c) in visit:
                continue
            if r < 0 or r == ROWS or c < 0 or c == COLS:
                continue

            visit.add((r, c))
            mat[r][c] = dist

            q.append([r+1, c, dist+1])
            q.append([r-1, c, dist+1])
            q.append([r, c+1, dist+1])
            q.append([r, c-1, dist+1])
        return mat
```
