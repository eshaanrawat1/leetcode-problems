---
date: 2024-07-08
difficulty: Hard
num: 403
related_topics:
  - Array
  - Dynamic Programming
return: Done
---

# Problem: 403. Frog Jump

## Description
see if frog can jump to end

## Approach / Thoughts
draw decision tree with possible jumps, try all and cache

## Solution
```python
class Solution:
    def canCross(self, stones: List[int]) -> bool:
        safe = set(stones)
        last = stones[-1]

        dp = {}
        def dfs(current, jump):
            if current == last:
                return True
            if current not in safe:
                return False
            if (current, jump) in dp:
                return dp[(current, jump)]

            possible = [jump-1, jump, jump+1]

            if current == stones[0]:
                possible = [1]

            res = False
            for j in possible:
                if j:
                    res = res or dfs(current + j, j)

            dp[(current, jump)] = res
            return res
        return dfs(stones[0], 1)
```
