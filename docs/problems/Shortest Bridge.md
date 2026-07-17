---
date: 2024-07-14
difficulty: Medium
num: 934
related_topics:
  - Array
  - BFS
  - DFS
  - Matrix
return: Done
---

# Problem: 934. Shortest Bridge

## Description
find shortest path between 2 islands

## Approach / Thoughts
sink one, multisource bfs

level -1

## Solution
```python
class Solution:
    def shortestBridge(self, grid: List[List[int]]) -> int:
        N = len(grid)
        visit = set()

        def sink(r, c):
            if r < 0 or c < 0 or r == N or c == N:
                return
            if grid[r][c] != 1:
                return

            grid[r][c] = '#'
            visit.add((r, c))

            sink(r+1, c)
            sink(r-1, c)
            sink(r, c+1)
            sink(r, c-1)


        check = False
        for r in range(N):
            for c in range(N):
                if grid[r][c] == 1:
                    sink(r, c)
                    check = True
                    break
            if check: 
                break

        q = deque([])
        for x in visit:
            q.append([x[0], x[1], 0])

        checked = set()
        while q:
            r, c, level = q.popleft()
            if r < 0 or c < 0 or r == N or c == N:
                continue
            if (r, c) in checked:
                continue
            if grid[r][c] == 1:
                return level-1

            checked.add((r, c))
            q.append([r+1, c, level+1])
            q.append([r-1, c, level+1])
            q.append([r, c+1, level+1])
            q.append([r, c-1, level+1])
```
