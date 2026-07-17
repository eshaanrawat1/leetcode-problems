---
date: 2024-08-09
difficulty: Medium
num: 840
related_topics:
  - Array
  - Hash Table
  - Math
  - Matrix
return: Done
---

# Problem: 840. Magic Squares In Grid

## Description

## Approach / Thoughts
brute force, find all

## Solution
```python
class Solution:
    def numMagicSquaresInside(self, grid: List[List[int]]) -> int:
        ROWS, COLS = len(grid), len(grid[0])

        def process_subgrid(r, c):
            if r + 2 >= ROWS or c + 2 >= COLS:
                return False

            all_sums = set()
            distinct = set()

            # get all nums
            for i in range(r, r+3):
                for j in range(c, c+3):
                    if grid[i][j] > 9 or grid[i][j] == 0:
                        return False
                    distinct.add(grid[i][j])

            # add rows
            for i in range(r, r+3):
                cur = sum(grid[i][j] for j in range(c, c+3))
                all_sums.add(cur)

            # add cols
            for j in range(c, c+3):
                cur = sum(grid[i][j] for i in range(r, r+3))
                all_sums.add(cur)

            # add diag
            l_diag = grid[r][c] + grid[r+1][c+1] + grid[r+2][c+2]
            r_diag = grid[r][c+2] + grid[r+1][c+1] + grid[r+2][c]

            all_sums.add(l_diag)
            all_sums.add(r_diag)

            return len(all_sums) == 1 and len(distinct) == 9

        count = 0
        for r in range(ROWS):
            for c in range(COLS):
                if process_subgrid(r, c):
                    count += 1
        return count
```
