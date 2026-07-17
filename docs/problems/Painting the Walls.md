---
date: 2025-03-25
difficulty: Hard
num: 2742
related_topics:
  - Array
  - Dynamic Programming
return: Review
---

# Problem: 2742. Painting The Walls

## Description
same, when paint wall, free painters can paint while cost

## Approach / Thoughts
check every possibility of take and skip

when take, for the cost of i, we get 1 task + time tasks

## Solution
```python
class Solution:
    def paintWalls(self, cost: List[int], time: List[int]) -> int:
        n = len(cost)

        @lru_cache(None)
        def dfs(i, remain):
            if remain <= 0:
                return 0
            if i == n:
                return inf

            take = cost[i] + dfs(i + 1, remain - 1 - time[i])
            skip = dfs(i + 1, remain)

            return min(take, skip)

        return dfs(0, n)
```
