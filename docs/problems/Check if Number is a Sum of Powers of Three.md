---
date: 2025-03-03
difficulty: Medium
num: 1780
related_topics:
  - Math
return: Done
---

# Problem: 1780. Check If Number Is A Sum Of Powers Of Three

## Description

## Approach / Thoughts
brute force powers of 3, take skip

## Solution
```python
class Solution:
    def checkPowersOfThree(self, n: int) -> bool:
        powers = [3**i for i in range(16)]

        def dfs(i, cur_sum):
            if i >= 15:
                return cur_sum == n

            take = dfs(i + 1, cur_sum + powers[i])
            skip = dfs(i + 1, cur_sum)

            return take or skip

        return dfs(0, 0)
```
