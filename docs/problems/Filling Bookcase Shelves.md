---
date: 2024-07-31
difficulty: Medium
num: 1105
related_topics:
  - Array
  - Dynamic Programming
return: Review
---

# Problem: 1105. Filling Bookcase Shelves

## Description

## Approach / Thoughts
dp pick and choose for shelf

## Solution
```python
class Solution:
    def minHeightShelves(self, books: List[List[int]], shelfWidth: int) -> int:
        dp = {}
        def dfs(i):
            if i == len(books):
                return 0
            if i in dp:
                return dp[i]

            cur_w = shelfWidth
            cur_h = 0
            dp[i] = float("inf")

            for j in range(i, len(books)):
                w, h = books[j]

                if cur_w < w:
                    break

                cur_w -= w
                cur_h = max(cur_h, h)

                dp[i] = min(dp[i], cur_h + dfs(j+1))
            return dp[i]
        return dfs(0)
```
