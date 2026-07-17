---
date: 2025-09-22
difficulty: Medium
num: 714
related_topics:
  - Array
  - Dynamic Programming
  - Greedy
return: Done
---

# Problem: 714. Best Time To Buy And Sell Stock With Transaction Fee

## Description

## Approach / Thoughts
dfs take skip

## Solution
```python
class Solution:
    def maxProfit(self, prices: List[int], fee: int) -> int:
        n = len(prices)

        @lru_cache(None)
        def dfs(i, hold):
            if i >= n:
                return 0

            sell = buy = skip = 0
            
            if hold:
                sell = prices[i] - fee + dfs(i+1, False)
                skip = dfs(i+1, True)
            else:
                buy = -prices[i] + dfs(i+1, True)
                skip = dfs(i+1, False)

            return max(sell, buy, skip)
    
        return dfs(0, False)
```
