---
date: 2024-09-04
difficulty: Medium
num: 1155
related_topics:
  - Dynamic Programming
return: Done
---

# Problem: 1155. Number Of Dice Rolls With Target Sum

## Description

## Approach / Thoughts
basic dfs dp

## Solution
```python
class Solution:
    def numRollsToTarget(self, n: int, k: int, target: int) -> int:
        mod = 10 ** 9 + 7
        
        dp = {}
        def dfs(i, cur_sum):
            if i == n and cur_sum == target:
                return 1
            if i == n or cur_sum >= target:
                return 0
            if (i, cur_sum) in dp:
                return dp[(i, cur_sum)]

            res = 0
            for j in range(1, k+1):
                res += dfs(i + 1, cur_sum + j)
            
            dp[(i, cur_sum)] = res % mod
            return res % mod
        
        return dfs(0, 0) % mod
```
