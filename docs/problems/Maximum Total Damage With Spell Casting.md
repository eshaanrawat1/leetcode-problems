---
date: 2025-10-10
difficulty: Medium
num: 3186
related_topics:
  - Array
  - Binary Search
  - Counting
  - Dynamic Programming
  - Hash Table
  - Sorting
  - Two-Pointer
return: Done
---

# Problem: 3186. Maximum Total Damage With Spell Casting

## Description
same, can cast spell with power p but not p+-1 or 2

## Approach / Thoughts
sort, since order doesn’t matter, accumulate pairs and dp take skip

## Solution
```python
class Solution:
    def maximumTotalDamage(self, power: List[int]) -> int:
        power.sort()
        
        stack = []
        for p in power:
            if stack and stack[-1][0] == p:
                stack[-1][1] += 1
                continue
            stack.append([p, 1])

        n = len(stack)

        def get_idx(i):
            j = i + 1
            while j < n and stack[i][0] + 2 >= stack[j][0]:
                j += 1
            return j
        
        @lru_cache(None)
        def dfs(i):
            if i >= n:
                return 0

            j = get_idx(i)
            take = (stack[i][0] * stack[i][1]) + dfs(j)
            skip = dfs(i + 1)

            return max(take, skip)

        return dfs(0)
```
