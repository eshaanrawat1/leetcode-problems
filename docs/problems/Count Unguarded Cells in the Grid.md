---
date: 2024-11-20
difficulty: Medium
num: 2257
related_topics:
  - Array
  - Matrix
  - Simulation
return: Done
---

# Problem: 2257. Count Unguarded Cells In The Grid

## Description

## Approach / Thoughts
4 way traversal for non visited cell

## Solution
```python
class Solution:
    def countUnguarded(self, m: int, n: int, guards: List[List[int]], walls: List[List[int]]) -> int:
        guard_set = {(x, y) for x, y in guards}
        wall_set = {(x, y) for x, y in walls}

        row_visit = set()
        col_visit = set()

        def in_bounds(r, c):
            return 0 <= r < m and 0 <= c < n

        def condition(r, c):
            return (r, c) not in wall_set and (r, c) not in guard_set

        def process_row(r, c):
            x, y = c - 1, c + 1

            while in_bounds(r, x) and condition(r, x):
                if (r, x) in row_visit:
                    break
                row_visit.add((r, x))
                x -= 1

            while in_bounds(r, y) and condition(r, y):
                if (r, y) in row_visit:
                    break
                row_visit.add((r, y))
                y += 1


        def process_col(r, c):
            u, d = r - 1, r + 1
            
            while in_bounds(u, c) and condition(u, c):
                if (u, c) in col_visit:
                    break
                col_visit.add((u, c))
                u -= 1

            while in_bounds(d, c) and condition(d, c):
                if (d, c) in col_visit:
                    break
                col_visit.add((d, c))
                d += 1

        for r in range(m):
            for c in range(n):
                if (r, c) in guard_set:
                    process_row(r, c)

        for r in range(m):
            for c in range(n):
                if (r, c) in guard_set:
                    process_col(r, c)
                    
        res = len(row_visit) + len(col_visit) - len(row_visit & col_visit)
        return m * n - res - len(guards) - len(walls)
```
