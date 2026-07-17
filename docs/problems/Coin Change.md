---
date: 2024-02-07
difficulty: Medium
num: 322
related_topics:
  - Array
  - BFS
  - Dynamic Programming
return: Done
---

# Problem: 322. Coin Change

## Description
Same as perfect squares with less steps

## Approach / Thoughts
Initialize DP array

Build from bottom up, checking if we can choose the coin

Return if possible

## Solution
```python
class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        dp = [amount+1] * (amount+1)
        dp[0] = 0

        for a in range(amount+1):
            for c in coins:
                if a-c >= 0:
                    dp[a] = min(dp[a], 1+dp[a-c])
        
        return dp[amount] if dp[amount] != amount+1 else -1
```
