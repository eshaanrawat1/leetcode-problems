---
date: 2026-03-06
difficulty: Medium
num: 2245
related_topics:
  - Staff
  - Array
  - Matrix
  - Prefix Sum
return:
---

# Problem:  

## Description
You are given a 2D integer array `grid` of size `m x n`, where each cell contains a positive integer.

A **cornered path** is defined as a set of adjacent cells with **at most** one turn. More specifically, the path should exclusively move either **horizontally** or **vertically** up to the turn (if there is one), without returning to a previously visited cell. After the turn, the path will then move exclusively in the **alternate** direction: move vertically if it moved horizontally, and vice versa, also without returning to a previously visited cell.

The **product** of a path is defined as the product of all the values in the path.

Return _the **maximum** number of **trailing zeros** in the product of a cornered path found in_ `grid`.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
[[Prefix Sum]]

trailing 0s are just count of 5 and 2
prefix sum for left right, accumulate prod from top and bot

learning - did accumulate from top, not bottom - ordering of rows can change solution

## Solution
```python
class Solution:
    def maxTrailingZeros(self, grid: List[List[int]]) -> int:

        def calc_trail_five(x):
            res = 0
            while x % 5 == 0:
                x //= 5
                res += 1
            return res

        def calc_trail_two(x):
            res = 0
            while x % 2 == 0:
                x //= 2
                res += 1
            return res
    
        def solve(grid):
            m, n = len(grid), len(grid[0])

            five = [[0] * n for _ in range(m)]
            even = [[0] * n for _ in range(m)]

            for i in range(m):
                for j in range(n):
                    val = grid[i][j]
                    five[i][j] += calc_trail_five(val)
                    even[i][j] += calc_trail_two(val)


            for i in range(m):
                for j in range(1, n):
                    five[i][j] += five[i][j-1]
                    even[i][j] += even[i][j-1]

            
            res = 0
            for j in range(n):
                cur_prod = 1
                n5 = n2 = 0
                for i in range(m):
                    val = grid[i][j]
                    cur_prod *= val

                    n5 += calc_trail_five(val)
                    n2 += calc_trail_two(val)
                    
                    n5l = n5r = 0
                    n2l = n2r = 0

                    if j > 0:
                        n5l = five[i][j-1]
                        n2l = even[i][j-1]
                    if j < n-1:
                        n5r = five[i][n-1] - five[i][j]
                        n2r = even[i][n-1] - even[i][j]

                    res = max(
                        res,
                        min(n5+n5l, n2+n2l),
                        min(n5+n5r, n2+n2r)
                    )
            return res

        return max(solve(grid), solve(grid[::-1]))