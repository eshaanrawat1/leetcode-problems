---
date: 2024-09-09
difficulty: Hard
num: 827
related_topics:
  - Array
  - BFS
  - DFS
  - Matrix
  - Union Find
return: Done
---

# Problem: 827. Making A Large Island

## Description
add a 1 and make largest island

## Approach / Thoughts
union find components to find area

for each 0 see if we add all potential components, max area

## Solution
```python
class UnionFind:
    def __init__(self, N, grid):
        self.par = [[(i, j) for j in range(N)] for i in range(N)]
        self.rank = [[0] * N for _ in range(N)]

        for r in range(N):
            for c in range(N):
                if grid[r][c]:
                    self.rank[r][c] = 1

    def find(self, r, c):
        while (r, c) != self.par[r][c]:
            r, c = self.par[r][c]
        return (r, c)

    def union(self, r1, c1, r2, c2):
        p1X, p1Y = self.find(r1, c1)
        p2X, p2Y = self.find(r2, c2)

        if (p1X, p1Y) == (p2X, p2Y):
            return False

        if self.rank[p1X][p1Y] >= self.rank[p2X][p2Y]:
            self.rank[p1X][p1Y] += self.rank[p2X][p2Y]
            self.par[p2X][p2Y] = self.par[p1X][p1Y]
        else:
            self.rank[p2X][p2Y] += self.rank[p1X][p1Y]
            self.par[p1X][p1Y] = self.par[p2X][p2Y]

        return True

class Solution:
    def largestIsland(self, grid: List[List[int]]) -> int:
        N = len(grid)
        u = UnionFind(N, grid)

        dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]

        def in_bounds(x, y):
            if min(x, y) < 0 or max(x, y) >= N or grid[x][y] == 0:
                return False
            return True

        for i in range(N):
            for j in range(N):

                if grid[i][j] == 1:
                    for dx, dy in dirs:
                        if in_bounds(i + dx, j + dy):
                            u.union(i, j, i + dx, j + dy)

        max_area = u.rank[0][0]
        for i in range(N):
            for j in range(N):

                if grid[i][j] == 0:
                    total = 0
                    visit_parents = set()

                    for dx, dy in dirs:
                        if in_bounds(i + dx, j + dy):
                            parent = u.find(i + dx, j + dy)
                            if parent not in visit_parents:
                                a, b = parent
                                total += u.rank[a][b]
                                visit_parents.add((a, b))
                    max_area = max(max_area, total + 1)
        return max_area
                   
```
