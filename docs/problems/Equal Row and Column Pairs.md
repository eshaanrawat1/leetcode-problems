---
date: 2024-10-11
difficulty: Medium
num: 2352
related_topics:
  - Array
  - Hash Table
  - Matrix
  - Simulation
return: Done
---

# Problem: 2352. Equal Row And Column Pairs

## Description

## Approach / Thoughts
freq of row in hashmap

## Solution
```python
class Solution:
    def equalPairs(self, grid: List[List[int]]) -> int:
        N = len(grid)
        rows = defaultdict(int)

        for r in grid:
            rows[tuple(r)] += 1

        pairs = 0
        for c in range(N):
            col = [grid[r][c] for r in range(N)]
            pairs += rows[tuple(col)]
        return pairs
```
