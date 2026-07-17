---
date: 2024-02-17
difficulty: Easy
num: 746
related_topics:
  - Array
  - Dynamic Programming
return: Done
---

# Problem: 746. Min Cost Climbing Stairs

## Description
Once you pay cost, you can climb 1 or 2 stairs, starting at index 0 or 1. Return minimum cost to climb stairs

## Approach / Thoughts
Consider base case of index 0 or 1 where there is no cost to climb

The take the minimum of ways you can reach index i

For example at index 2, the ways you can reach are index 0 and 1

At index i, take the minimum between i and i-1 and store it in a cache

## Solution
```python
class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        cache = {}
        def helper(i):
            if i == 0 or i == 1: return 0
            if i in cache: return cache[i]

            res = min(cost[i-1] + helper(i-1), cost[i-2] + helper(i-2))
            cache[i] = res
            return res
        return helper(len(cost))
```
