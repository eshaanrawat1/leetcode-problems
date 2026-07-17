---
date: 2025-12-24
difficulty: Medium
num: 526
related_topics:
  - Array
  - Backtracking
  - Bit Manipulation
  - Bitmask
  - Dynamic Programming
return: Done
---

# Problem: 526. Beautiful Arrangement

## Description

## Approach / Thoughts
positions for each number bitmask dp

## Solution
```python
class Solution:
    def countArrangement(self, n: int) -> int:
        cands = list(range(1, n+1))
        pos = defaultdict(set)

        for c in cands:
            for i in range(1, n+1):
                if c % i == 0 or i % c == 0:
                    pos[c].add(i)

        def dfs(i, seen):
            if i > n:
                return 1

            res = 0
            for idx in pos[i]:
                if not (1 << idx) & seen:
                    res += dfs(i+1, seen | (1 << idx))
            return res
        return dfs(1, 0)
```
