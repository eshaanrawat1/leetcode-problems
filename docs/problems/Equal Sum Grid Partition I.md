---
date: 2026-03-25
difficulty: Medium
num: 3546
related_topics:
  - Senior
  - Array
  - Matrix
  - Enumeration
  - Prefix Sum
return:
---

# Problem:  

## Description
You are given an `m x n` matrix `grid` of positive integers. Your task is to determine if it is possible to make **either one horizontal or one vertical cut** on the grid such that:

- Each of the two resulting sections formed by the cut is **non-empty**.
- The sum of the elements in both sections is **equal**.

Return `true` if such a partition exists; otherwise return `false`.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
check row and col sums transpose

## Solution
```python
class Solution:
    def canPartitionGrid(self, grid: List[List[int]]) -> bool:
        m, n = len(grid), len(grid[0])
        total = sum(sum(row) for row in grid)

        def calc(grid, ROWS):
            tot = total
            cur = 0

            for i in range(ROWS-1):
                s = sum(grid[i])
                tot -= s
                cur += s
                if tot == cur:
                    return True
            return False

        trsp = [[grid[i][j] for i in range(m)] for j in range(n)]
        return calc(grid, m) or calc(trsp, n)