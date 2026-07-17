---
date: 2025-01-19
difficulty: Medium
num: 1765
related_topics:
  - Array
  - BFS
  - Matrix
return: Done
---

# Problem: 1765. Map Of Highest Peak

## Description
same, distance of land from each water cell

## Approach / Thoughts
multi source bfs

## Solution
```python
class Solution:
    def highestPeak(self, isWater: List[List[int]]) -> List[List[int]]:
        m, n = len(isWater), len(isWater[0])

        q = deque()

        res = [[-1] * n for _ in range(m)]
        visit = [[-1] * n for _ in range(m)]

        for r in range(m):
            for c in range(n):
                if isWater[r][c]:
                    q.append((r, c, 0))
                    visit[r][c] = 1

        while q:
            x, y, val = q.popleft()
            res[x][y] = val
            
            for nx, ny in [[x+1, y], [x-1, y], [x, y+1], [x, y-1]]:
                if 0 <= nx < m and 0 <= ny < n:
                    if visit[nx][ny] == -1:
                        visit[nx][ny] = 1
                        q.append((nx, ny, val+1))
        return res
```
