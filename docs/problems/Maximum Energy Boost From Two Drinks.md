---
date: 2024-08-18
difficulty: Medium
num: 3259
related_topics:
  - Array
  - Dynamic Programming
return: Done
---

# Problem: 3259. Maximum Energy Boost From Two Drinks

## Description

## Approach / Thoughts
dp

## Solution
```python
class Solution:
    def maxEnergyBoost(self, energyDrinkA: List[int], energyDrinkB: List[int]) -> int:
        N = len(energyDrinkA)

        @cache
        def dfs(i, top):
            if i >= N:
                return 0

            if top:
                op1 = energyDrinkA[i] + dfs(i+1, top)
                op2 = energyDrinkA[i] + dfs(i+2, not top)
            else:
                op1 = energyDrinkB[i] + dfs(i+1, top)
                op2 = energyDrinkB[i] + dfs(i+2, not top)

            res = max(op1, op2)
            return res

        return max(
            dfs(0, True),
            dfs(0, False)
        )
```
