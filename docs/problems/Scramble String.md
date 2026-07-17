---
date: 2025-05-12
difficulty: Hard
num: 87
related_topics:
  - Dynamic Programming
  - String
return: Done
---

# Problem: 87. Scramble String

## Description

## Approach / Thoughts
dfs break into separate parts and compare those - base case of same letters

each noswap is straightfoward - just split and compare

for swap, take equal number of chars from the end, swap and compare

## Solution
```python
class Solution:
    def isScramble(self, s1: str, s2: str) -> bool:
        
        @lru_cache(None)
        def dfs(s1, s2):
            if s1 == s2:
                return True
            if sorted(s1) != sorted(s2):
                return False 

            for i in range(1, len(s1)):
                a1, b1 = s1[:i], s1[i:]
                a2, b2 = s2[:i], s2[i:]

                noswap = dfs(a1, a2) and dfs(b1, b2)
                swap = dfs(a1, s2[-i:]) and dfs(b1, s2[:-i])

                if swap or noswap:
                    return True
            return False

        return dfs(s1, s2)
```
