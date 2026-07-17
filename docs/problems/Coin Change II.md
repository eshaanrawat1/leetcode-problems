---
date: 2024-08-09
difficulty: Medium
num: 518
related_topics:
  - Array
  - Dynamic Programming
return: Done
---

# Problem: 518. Coin Change Ii

## Description
how many unique ways to make target sum

## Approach / Thoughts
pick and choose coins

keep track of state, 2d dp

## Solution
```python
class Solution:
    def change(self, amount: int, coins: List[int]) -> int:
        coins.sort()

        dp = {}
        def dfs(profit, index):
            if profit == amount:
                return 1
            if profit > amount or index == len(coins):
                return 0
            if (profit, index) in dp:
                return dp[(profit, index)]

            res = 0

            # take current coin
            res += dfs(profit + coins[index], index)

            # skip current coin
            res += dfs(profit, index+1)
            
            dp[(profit, index)] = res
            return res
        return dfs(0, 0)
```
