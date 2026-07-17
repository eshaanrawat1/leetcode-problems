---
date: 2025-12-29
difficulty: Medium
num: 756
related_topics:
  - Backtracking
  - Bit Manipulation
  - Hash Table
  - String
return: Done
---

# Problem: 756. Pyramid Transition Matrix

## Description

## Approach / Thoughts
dfs check all characters

## Solution
```python
class Solution:
    def pyramidTransition(self, bottom: str, allowed: List[str]) -> bool:
        N = len(bottom)
        allowed = set(allowed)

        @lru_cache(None)
        def dfs(r, c, prev, cur):
            if r == 1:
                for ch in 'ABCDEF':
                    s = prev[0] + prev[1] + ch
                    if s in allowed:
                        return True
                return False

            
            num_cols = len(prev)-1
            if c == num_cols:
                return dfs(r-1, 0, cur, '')
            
            res = False
            for ch in 'ABCDEF':
                s = prev[c] + prev[c+1] + ch
                if s in allowed:
                    res = res or dfs(r, c+1, prev, cur+ch)
            return res

        num_rows = len(bottom)
        return dfs(num_rows-1, 0, bottom, '')
```
