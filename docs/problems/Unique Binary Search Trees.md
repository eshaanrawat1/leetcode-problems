---
date: 2024-07-11
difficulty: Medium
num: 96
related_topics:
  - BST
  - Binary Tree
  - Dynamic Programming
  - Math
  - Tree
return: Done
---

# Problem: 96. Unique Binary Search Trees

## Description

## Approach / Thoughts
find number of left side trees and right side and cache for each root

also catalan number

## Solution
```python
class Solution:
    def numTrees(self, n: int) -> int:

        dp = [0] * 20
        dp[0] = dp[1] = 1
        def dfs(num):
            if dp[num] > 0:
                return dp[num]

            total = 0
            for i in range(1, num+1):
                total += (dfs(i-1) * dfs(num-i))
            dp[num] = total
            return total
        return dfs(n)
```
