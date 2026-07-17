---
date: 2024-06-29
difficulty: Medium
num: 983
related_topics:
  - Array
  - Dynamic Programming
return: Done
---

# Problem: 983. Minimum Cost For Tickets

## Description
find min cost for tickets based on different plans

## Approach / Thoughts
find all possible options take min and cache

## Solution
```python
class Solution:
    def mincostTickets(self, days: List[int], costs: List[int]) -> int:
        dp = {}
        days_set = set(days)

        def dfs(i):
            if i > 365:
                return 0
            if i not in days_set:
                return dfs(i+1)
            if i in dp:
                return dp[i]

            one_day = costs[0] + dfs(i+1)
            seven_day = costs[1] + dfs(i+7)
            thirty_day = costs[2] + dfs(i+30)

            res = min(one_day, seven_day, thirty_day)

            dp[i] = res
            return res
       
        return dfs(days[0])
```
