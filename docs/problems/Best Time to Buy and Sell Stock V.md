---
date: 2025-12-16
difficulty: Medium
num: 3573
related_topics:
  - Array
  - Dynamic Programming
return: Done
---

# Problem: 3573. Best Time To Buy And Sell Stock V

## Description
same, can buy or short

## Approach / Thoughts
dp all options keep track of buy hold and sell hold

## Solution
```python
class Solution:
    def maximumProfit(self, prices: List[int], k: int) -> int:
        n = len(prices)

        dp = [[[-inf,-inf,-inf] for _ in range(k+1)] for _ in range(n)]

        # no hold = 0
        # buyhold = 1
        # sellhold = 2

        def dfs(i, k, hold):
            if i >= n or k == 0:
                return -inf if hold else 0

            if dp[i][k][hold] != -inf:
                return dp[i][k][hold]

            buy = ss = sell = sb = -inf

            if hold == 0:
                buy = -prices[i] + dfs(i+1, k, 1)
                ss = prices[i] + dfs(i+1, k, 2)

            if hold == 1:
                sell = prices[i] + dfs(i+1, k-1, 0)
            
            if hold == 2:
                sb = -prices[i] + dfs(i+1, k-1, 0)

            skip = dfs(i+1, k, hold)
            dp[i][k][hold] = max(buy, ss, sell, sb, skip)
            return dp[i][k][hold] 

        return dfs(0, k, 0)
```
