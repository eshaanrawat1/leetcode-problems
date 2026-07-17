---
date: 2024-05-25
difficulty: Hard
num: 552
related_topics:
  - Dynamic Programming
return: Done
---

# Problem: 552. Student Attendance Record Ii

## Description
Find all possible records

## Approach / Thoughts
brute force dfs and cache memo

## Solution
```python
class Solution:
    def checkRecord(self, n: int) -> int:
        # [days][A][L]
        has_cache = [[[False] * 3 for _ in range(2)] for _ in range(n+1)]
        cache = [[[None] * 3 for _ in range(2)] for _ in range(n+1)]
        self.MOD = 10 ** 9 + 7
        
        def dfs(days, absents, lates):
            if absents > 1 or lates >= 3:
                return 0
            if days == n:
                return 1
            if has_cache[days][absents][lates]:
                return cache[days][absents][lates]

            total = 0

            total += dfs(days+1, absents, 0)
            total += dfs(days+1, absents+1, 0)
            total += dfs(days+1, absents, lates+1)

            has_cache[days][absents][lates] = True
            cache[days][absents][lates] = total % self.MOD

            return total % self.MOD

        return dfs(0,0,0)
```
