---
date: 2024-09-17
difficulty: Medium
num: 2998
related_topics:
  - BFS
  - Dynamic Programming
  - Memoization
return: Done
---

# Problem: 2998. Minimum Number Of Operations To Make X And Y Equal

## Description
same, make operations to x

## Approach / Thoughts
go big, always try to divide by 5 or 11 and get the abs modulo distance

also check case of y-x (2, 1)

base case of less than - always increment

## Solution
```python
class Solution:
    def minimumOperationsToMakeEqual(self, x: int, y: int) -> int:
        @cache
        def dfs(num):
            if num == y:
                return 0
            if num < y:
                return y - num

            dist1 = num % 11
            dist2 = num % 5

            if dist1 > 11 - dist1:
                dist1 = -1 * (11 - dist1)
            if dist2 > 5 - dist2:
                dist2 = -1 * (5 - dist2)

            return min(
                abs(dist1) + 1 + dfs((num - dist1) // 11),
                abs(dist2) + 1 + dfs((num - dist2) // 5),
                num - y
            )
        
        return dfs(x)
```
