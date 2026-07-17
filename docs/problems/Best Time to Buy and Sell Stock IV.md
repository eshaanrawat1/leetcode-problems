---
date: 2024-12-29
difficulty: Hard
num: 188
related_topics:
  - Array
  - Dynamic Programming
return: Done
---

# Problem: 188. Best Time To Buy And Sell Stock Iv

## Description
same, k transactions

## Approach / Thoughts
same as 3, generalize dfs function

## Solution
```python
class Solution:
    def maxProfit(self, k: int, prices: List[int]) -> int:
        N = len(prices)
        dp = [[[-1, -1] for _ in range(k)] for _ in range(N)]

        def dfs(i, cnt, buy):
            if i == N or cnt == k:
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
