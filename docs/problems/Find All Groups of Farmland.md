---
date: 2024-04-19
difficulty: Medium
num: 1992
related_topics:
  - Array
  - BFS
  - DFS
  - Matrix
return: Done
---

# Problem: 1992. Find All Groups Of Farmland

## Description
Find islands but list coordinates

## Approach / Thoughts
Flood fill, store row and col in set

## Solution
```python
class Solution:
    def findFarmland(self, land: List[List[int]]) -> List[List[int]]:
        ROWS, COLS = len(land), len(land[0])

        def dfs(r, c):
            # Base cases, invalid land
            if r < 0 or r >= ROWS or c < 0 or c >= COLS: return 
            if land[r][c] != 1: return 

            # Store rows and cols in sets
            all_rows.add(r)
            all_cols.add(c)
            num_cells[0] += 1

            land[r][c] = '#'

            dfs(r+1, c)
            dfs(r-1, c)
            dfs(r, c+1)
            dfs(r, c-1)

        res = []
        for i in range(ROWS):
            for j in range(COLS):
                if land[i][j] == 1:
                    all_rows, all_cols = set(), set()
                    num_cells = [0]

                    dfs(i, j)

                    width = max(all_rows) - min(all_rows) + 1
                    height = max(all_cols) - min(all_cols) + 1
                   
                    if width*height == num_cells[0]: 
                        top_left = [min(all_rows), min(all_cols)]
                        bot_right = [max(all_rows), max(all_cols)]
                        res.append(top_left + bot_right)
        return res
```
