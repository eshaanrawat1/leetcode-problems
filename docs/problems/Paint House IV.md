---
date: 2026-05-13
difficulty: Medium
num: 3429
related_topics:
  - Array
  - Dynamic Programming
return:
---

# Problem: 3429. Paint House IV

## Description
You are given an **even** integer `n` representing the number of houses arranged in a straight line, and a 2D array `cost` of size `n x 3`, where `cost[i][j]` represents the cost of painting house `i` with color `j + 1`.

The houses will look **beautiful** if they satisfy the following conditions:

	No **two** adjacent houses are painted the same color.

	Houses **equidistant** from the ends of the row are **not** painted the same color. For example, if `n = 6`, houses at positions `(0, 5)`, `(1, 4)`, and `(2, 3)` are considered equidistant.

Return the **minimum** cost to paint the houses such that they look **beautiful**.

## Approach / Thoughts
[[Weekly Contest 433]]

dp from both sides 

## Solution
```python
class Solution:
    def minCost(self, n: int, cost: List[List[int]]) -> int:

        @lru_cache(None)
        def dfs(i, j, lp, rp):
            if i > j:
                return 0

            if i == j:
                return [cost[i][x] for x in range(3) if x != lp and x != rp][0]

            
            ci = cost[i]
            cj = cost[j]
            res = inf

            if lp != 0:
                if rp != 1:
                    res = min(res, ci[0] + cj[1] + dfs(i+1, j-1, 0, 1))
                if rp != 2:
                    res = min(res, ci[0] + cj[2] + dfs(i+1, j-1, 0, 2))

            if lp != 1:
                if rp != 0:
                    res = min(res, ci[1] + cj[0] + dfs(i+1, j-1, 1, 0))
                if rp != 2:
                    res = min(res, ci[1] + cj[2] + dfs(i+1, j-1, 1, 2))

            if lp != 2:
                if rp != 0:
                    res = min(res, ci[2] + cj[0] + dfs(i+1, j-1, 2, 0))
                if rp != 1:
                    res = min(res, ci[2] + cj[1] + dfs(i+1, j-1, 2, 1))
            return res

        return dfs(0, n-1, -1, -1)
```