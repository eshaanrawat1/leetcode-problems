---
date: 2026-03-17
difficulty: Medium
num: 3070
related_topics:
  - Senior
  - Array
  - Matrix
  - Prefix Sum
return:
---

# Problem:  

## Description
You are given a **0-indexed** integer matrix `grid` and an integer `k`.

Return _the **number** of submatrices that contain the top-left element of the_ `grid`, _and have a sum less than or equal to_ `k`.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
row prefix sums, go col by col and accumulate row prefix sum 
every thing must include top left

## Solution
```python
class Solution:
    def countSubmatrices(self, grid: List[List[int]], k: int) -> int:
        if grid[0][0] > k:
            return 0

        m, n = len(grid), len(grid[0])

        row_ps = [row[:] for row in grid]
        for row in row_ps:
            for i in range(1, n):
                row[i] += row[i-1]

        res = 0
        for c in range(n):
            cur_sum = 0
            for r in range(m):
                cur_sum += row_ps[r][c]
                if cur_sum <= k:
                    res += 1
        return res
        