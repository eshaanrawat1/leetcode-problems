---
date: 2024-06-02
difficulty: Medium
num: 120
related_topics:
  - Array
  - Dynamic Programming
return: Done
---

# Problem: 120. Triangle

## Description
min falling path

## Approach / Thoughts
dfs with memo

## Solution
```python
class Solution:
    def minimumTotal(self, triangle: List[List[int]]) -> int:
        memo = {}
        def dfs(row, col):
            if row == len(triangle):
                return 0
            if col < 0 or col >= len(triangle[row]):
                return float("inf")
            if (row, col) in memo:
                return memo[(row, col)]
            
            left = triangle[row][col] + dfs(row+1, col)
            right = triangle[row][col] + dfs(row+1, col+1)
            res = min(left, right)
            
            memo[(row, col)] = res
            return res

        return dfs(0, 0)
```
