---
date: 2025-08-23
difficulty: Medium
num: 3122
related_topics:
  - Array
  - Dynamic Programming
  - Matrix
return: Done
---

# Problem: 3122. Minimum Number Of Operations To Satisfy Conditions

## Description
change all numbers in column to be equal and no adjacent equal columns

## Approach / Thoughts
number is 1-9, dp on check each column with each value

## Solution
```python
class Solution:
    def minimumOperations(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])

        freqs = [None] * n
        for j in range(n):
            freqs[j] = Counter([grid[i][j] for i in range(m)])

        @cache
        def dfs(col, skip):
            if col >= n:
                return 0

            current_freq = freqs[col]

            res = inf
            for num in range(10):
                if num != skip:
                    ops = m - current_freq[num]
                    res = min(res, ops + dfs(col + 1, num))
            return res
        
        return dfs(0, None)
```
