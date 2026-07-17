---
date: 2024-07-08
difficulty: Medium
num: 2466
related_topics:
  - Dynamic Programming
return: Done
---

# Problem: 2466. Count Ways To Build Good Strings

## Description

## Approach / Thoughts
track length and check base case if valid string

## Solution
```python
class Solution:
    def countGoodStrings(self, low: int, high: int, zero: int, one: int) -> int:
        dp = {}
        def dfs(current):
            res = 0
            if low <= current <= high:
                res = 1
            if current > high:
                return 0
            if current in dp:
                return dp[current]

            # append 0
            res += dfs(current + zero)

            # append 1
            res += dfs(current + one)
        
            dp[current] = res  
            return res % (10 ** 9 + 7)
        return dfs(0) 
```
