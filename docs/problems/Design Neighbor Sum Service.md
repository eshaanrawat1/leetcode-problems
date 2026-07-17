---
date: 2024-08-06
difficulty: Easy
num: 3242
related_topics:
  - Array
  - Design
  - Hash Table
  - Matrix
  - Simulation
return: Done
---

# Problem: 3242. Design Neighbor Sum Service

## Description

## Approach / Thoughts
val to index and store

## Solution
```python
class neighborSum:

    def __init__(self, grid: List[List[int]]):
        self.grid = grid
        self.ROWS = len(self.grid)
        self.COLS = len(self.grid[0])

        self.val_to_idx = {}

        for r in range(len(grid)):
            for c in range(len(grid[0])):
                val = grid[r][c]
                self.val_to_idx[val] = (r, c)

    def adjacentSum(self, value: int) -> int:
        r, c = self.val_to_idx[value]
        
        total = 0
        for x, y in [[r+1, c], [r-1, c], [r, c+1], [r, c-1]]:
            if 0 <= x < self.ROWS and 0 <= y < self.COLS:
                total += self.grid[x][y]
        return total

    def diagonalSum(self, value: int) -> int:
        r, c = self.val_to_idx[value]
        
        total = 0
        for x, y in [[r+1, c+1], [r-1, c-1], [r-1, c+1], [r+1, c-1]]:
            if 0 <= x < self.ROWS and 0 <= y < self.COLS:
                total += self.grid[x][y]
        return total


# Your neighborSum object will be instantiated and called as such:
# obj = neighborSum(grid)
# param_1 = obj.adjacentSum(value)
# param_2 = obj.diagonalSum(value)
```
