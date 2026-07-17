---
date: "2026-07-12"
difficulty: "Medium"
rating: 1400
num: "3988"
related_topics:
  - "simulation"
  - "matrix"
return:
---

# Problem: 3988. Create Grid With Exactly K Paths I

## Approach / Thoughts

[[Weekly Contest 510]]

enumerate every possible edge case since k <= 4
think in terms of number of open spaces
1,2 is trivial
3 is opening more spaces, handle special case of 2 rows or columns
4 can use symmetry similar to example test case

## Solution

```python
class Solution:
    def createGrid(self, m: int, n: int, k: int) -> list[str]:
        if (m == 1 or n == 1) and k > 1:
            return []

        if m == n == 2 and k >= 3:
            return []

        if m * n <= 6 and k == 4:
            return []

        grid = [['.'] * n for _ in range(m)]

        if k == 1:
            if m == 1 or n == 1:
                grid = [''.join(r) for r in grid]
                return grid
                
            for i in range(m):
                for j in range(n):
                    if i == 0 or j == n-1:
                        continue
                    grid[i][j] = '#'
            grid = [''.join(r) for r in grid]
            return grid


        if k == 2:
            if m == 2:
                for j in range(n-2):
                    grid[1][j] = '#'
                grid = [''.join(r) for r in grid]
                return grid

            if n == 2:
                for i in range(2, m):
                    grid[i][0] = '#'
                grid = [''.join(r) for r in grid]
                return grid
                
            for i in range(m):
                for j in range(n):
                    if i == 0 or i == m-1 or j == 0 or j == n-1:
                        continue
                    grid[i][j] = '#'
            grid = [''.join(r) for r in grid]
            return grid
        

        if k == 3:
            if m == 2 and n == 3 or m == 3 and n == 2:
                grid = [''.join(r) for r in grid]
                return grid

            if m >= 3:
                for i in range(m):
                    for j in range(n):
                        if i == 0 or j == n-1:
                            continue
                        grid[i][j] = '#'

                for i in range(3):
                    grid[i][n-2] = '.'
                grid = [''.join(r) for r in grid]
                return grid
            else:
                for j in range(n-3):
                    grid[1][j] = '#'
                grid = [''.join(r) for r in grid]
                return grid

        if m == 2 and n == 4 or m == 4 and n == 2:
            grid = [''.join(r) for r in grid]
            return grid

        
        if m >= 3:
            for i in range(m):
                for j in range(n):
                    if i != 1:
                        grid[i][j] = '#'

            grid[0][0] = grid[0][1] = '.'
            grid[2][n-2] = '.'
            for i in range(1, m):
                grid[i][-1] = '.'

            if n == 2:
                grid[3][0] = '.'
            
            grid = [''.join(r) for r in grid]
            return grid
            
        else:
            if n-4 < 0:
                return []
            for j in range(n-4):
                grid[1][j] = '#'
            grid = [''.join(r) for r in grid]
            return grid
```
