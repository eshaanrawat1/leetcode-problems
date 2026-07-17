---
date: 2024-10-09
difficulty: Hard
num: 174
related_topics:
  - Array
  - Dynamic Programming
  - Matrix
return: Review
---

# Problem: 174. Dungeon Game

## Description
same, min health for bottom of dungeon

## Approach / Thoughts
binary search and table dp to check min two possibilities

## Solution
```python
class Solution:
    def calculateMinimumHP(self, dungeon: List[List[int]]) -> int:
        ROWS, COLS = len(dungeon), len(dungeon[0])

        def dp(health):
            dp = [[float("-inf")] * COLS for _ in range(ROWS)]
            dp[0][0] = health + dungeon[0][0]

            for r in range(ROWS):
                for c in range(COLS):
                    if r > 0 and dp[r-1][c] > 0:
                        dp[r][c] = max(dp[r][c], dp[r-1][c] + dungeon[r][c])
                    if c > 0 and dp[r][c-1] > 0:
                        dp[r][c] = max(dp[r][c], dp[r][c-1] + dungeon[r][c])
            return dp[-1][-1] > 0


        l, r = 1, int(1e7)
        min_health = None

        while l <= r:
            m = (l + r) // 2
            if dp(m):
                min_health = m
                r = m - 1
            else:
                l = m + 1
        return min_health
```
