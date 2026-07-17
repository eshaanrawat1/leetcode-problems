---
date: 2024-12-29
difficulty: Hard
num: 123
related_topics:
  - Array
  - Dynamic Programming
return: Done
---

# Problem: 123. Best Time To Buy And Sell Stock Iii

## Description
same, 2 transactions

## Approach / Thoughts
top down dp take and skip all options

## Solution
```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        
        dp = [[[-1, -1] for _ in range(2)] for _ in range(len(prices))]

        def dfs(i, cnt, buy):
            if i == len(prices) or cnt == 2:
                return 0
            if dp[i][cnt][buy] != -1:
                return dp[i][cnt][buy]

            if buy == 0:
                take = dfs(i + 1, cnt, 1) - prices[i]
                skip = dfs(i + 1, cnt, 0)
            else:
                take = dfs(i + 1, cnt + 1, 0) + prices[i]
                skip = dfs(i + 1, cnt, 1)

            dp[i][cnt][buy] = max(take, skip)
            return max(take, skip)

        return dfs(0, 0, 0)
```
