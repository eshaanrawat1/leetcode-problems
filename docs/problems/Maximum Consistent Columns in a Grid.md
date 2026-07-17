---
date: "2026-07-12"
difficulty: "Hard"
rating: 1800
num: "3989"
related_topics:
  - "dp"
  - "knapsack-dp"
  - "column-condition-dp"
return:
---

# Problem: 3989. Maximum Consistent Columns in a Grid

## Approach / Thoughts

[[Weekly Contest 510]]

dp take skip columns with conditions 
upsolved

## Solution

```python
class Solution:
    def maxConsistentColumns(self, grid: List[List[int]], limit: int) -> int:
        m, n = len(grid), len(grid[0])

        @lru_cache(None)
        def dfs(i, j):
            if i >= n:
                return 0

            res = dfs(i+1, j)
            if j == -1 or all(abs(grid[r][i] - grid[r][j]) <= limit for r in range(m)):
                res = max(res, 1 + dfs(i+1, i))
            return res
        return dfs(0, -1)
```
