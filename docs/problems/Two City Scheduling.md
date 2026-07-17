---
date: 2024-10-07
difficulty: Medium
num: 1029
related_topics:
  - Array
  - Greedy
  - Sorting
return: Done
---

# Problem: 1029. Two City Scheduling

## Description
same, send people to cities at min cost

## Approach / Thoughts
dp pick and choose

## Solution
```python
class Solution:
    def twoCitySchedCost(self, costs: List[List[int]]) -> int:
        
        @cache
        def dfs(i, num_a, num_b):
            if i >= len(costs):
                return 0

            take_a = take_b = float("inf")

            if num_a > 0:
                take_a = costs[i][0] + dfs(i + 1, num_a - 1, num_b)

            if num_b > 0:
                take_b = costs[i][1] + dfs(i + 1, num_a, num_b - 1)

            return min(take_a, take_b)

        people = len(costs) // 2

        return dfs(0, people, people)
```
