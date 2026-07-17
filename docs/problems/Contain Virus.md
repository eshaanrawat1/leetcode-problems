---
date: 2026-06-25
difficulty: Hard
num: 749
related_topics:
  - Array
  - Depth-First Search
  - Breadth-First Search
  - Matrix
  - Simulation
return:
---

# Problem: 749. Contain Virus

## Description
A virus is spreading rapidly, and your task is to quarantine the infected area by installing walls.

The world is modeled as an `m x n` binary grid `isInfected`, where `isInfected[i][j] == 0` represents uninfected cells, and `isInfected[i][j] == 1` represents cells contaminated with the virus. A wall (and only one wall) can be installed between any two **4-directionally** adjacent cells, on the shared boundary.

Every night, the virus spreads to all neighboring cells in all four directions unless blocked by a wall. Resources are limited. Each day, you can install walls around only one region (i.e., the affected area (continuous block of infected cells) that threatens the most uninfected cells the following night). There **will never be a tie**.

Return *the number of walls used to quarantine all the infected regions*. If the world will become fully infected, return the number of walls used.

## Approach / Thoughts
simulate the expansion of the virus
at each stage
- get groups (continuous regions of infection)
- find the one that threatens the largest amount of free cells 
- pop that group and build walls around it -> the count of wals is the number of free cells touched (since those are necessary fence off points)
- simulate the bfs expansion of the virus
- combine groups since some groups might have merged with the daily expansion - make sure not to include regions that have already been fenced off
- repeat

## Solution
```python
class Solution:
    def containVirus(self, grid: List[List[int]]) -> int:
        # can use some kind of multistep bfs 

        # pass 1 - break into groups and find which group has most
        # base case -> only 1 group left, walls is counted 
        #   for each free cell for that region, count of walls
        #   is how many places it is touched 
        
        # pop that group and repeat
        # 5:25 for plan 1
        # WA - 30:00
        # WA - 38:00
        # AC - 49:30

        m, n = len(grid), len(grid[0])
        done = set()

        def in_bounds(r, c):
            return 0 <= r < m and 0 <= c < n

        def get_groups():
            seen = set()
            groups = []
            
            for i in range(m):
                for j in range(n):
                    if grid[i][j] and (i, j) not in seen and (i, j) not in done:
                        q = deque()
                        q.append((i, j))
                        seen.add((i, j))

                        tmp = []

                        while q:
                            r, c = q.popleft()
                            tmp.append((r, c))
                            for nr, nc in [[r+1,c], [r-1,c], [r,c+1], [r,c-1]]:
                                if in_bounds(nr, nc) and (nr, nc) not in seen and (nr, nc) not in done:
                                    if grid[nr][nc]:
                                        q.append((nr, nc))
                                        seen.add((nr, nc))
                        
                        if tmp:
                            groups.append(tmp[:])
            return groups

        def count_free(group):
            free = set()

            for r, c in group:
                for nr, nc in [[r+1,c], [r-1,c], [r,c+1], [r,c-1]]:
                    if in_bounds(nr, nc):
                        if grid[nr][nc] == 0:
                            free.add((nr, nc))
            return len(free)

        def count_walls(group):
            walls = 0
            for r, c in group:
                for nr, nc in [[r+1,c], [r-1,c], [r,c+1], [r,c-1]]:
                    if in_bounds(nr, nc):
                        if grid[nr][nc] == 0:
                            walls += 1
            return walls

        def extend_groups(groups):
            for g in groups:       
                for r, c in g:
                    for nr, nc in [[r+1,c], [r-1,c], [r,c+1], [r,c-1]]:
                        if in_bounds(nr, nc):
                            if grid[nr][nc] == 0:
                                grid[nr][nc] = 1
        
        groups = get_groups()
        res = 0

        while groups:
            groups.sort(key=lambda g: count_free(g))
            last = groups.pop()

            for l in last:
                done.add(l)

            res += count_walls(last)
            extend_groups(groups)
            groups = get_groups()
        return res
```