---
date: 2025-12-23
difficulty: Medium
num: 464
related_topics:
  - Bit Manipulation
  - Bitmask
  - Dynamic Programming
  - Game Theory
  - Math
  - Memoization
return: Done
---

# Problem: 464. Can I Win

## Description
same, can reach max score, unique ints

## Approach / Thoughts
dp bitmask for seen ints, turn based game minmax style

if a possible win is there, return that

## Solution
```python
class Solution:
    def canIWin(self, maxChoosableInteger: int, desiredTotal: int) -> bool:
        n = maxChoosableInteger
        if (n * (n+1) // 2) < desiredTotal:
            return False

        @lru_cache(None)
        def dfs(turn, seen, amt):
            for i in range(1, maxChoosableInteger+1):
                if not (seen & (1 << i)): 
                    if amt + i >= desiredTotal:
                        return turn
                    else:
                        res = dfs(not turn, seen | (1 << i), amt + i)
                        if res == turn:
                            return res
            return not turn
        
        return dfs(True, 0, 0)
```
