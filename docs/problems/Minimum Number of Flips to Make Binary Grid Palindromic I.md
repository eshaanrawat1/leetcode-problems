---
date: 2024-08-07
difficulty: Medium
num: 3239
related_topics:
  - Array
  - Matrix
  - Two-Pointer
return: Done
---

# Problem: 3239. Minimum Number Of Flips To Make Binary Grid Palindromic I

## Description
make all rows or cols palindromic

## Approach / Thoughts
min for all rows or all cols

## Solution
```python
class Solution:
    def minFlips(self, grid: List[List[int]]) -> int:
        ROWS, COLS = len(grid), len(grid[0])
        
        def flip_rows():
            count = 0
            for row in range(ROWS):
                l, r = 0, COLS-1
                
                while l < r:
                    if grid[row][l] != grid[row][r]:
                        count += 1
                    l += 1
                    r -= 1
            return count
        
        def flip_cols():
            count = 0
            for c in range(COLS):
                t, b = 0, ROWS-1
                
                while t < b:
                    if grid[t][c] != grid[b][c]:
                        count += 1
                    t += 1
                    b -= 1
            return count
        
        return min(flip_cols(), flip_rows())
```
