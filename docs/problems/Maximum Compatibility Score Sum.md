---
date: 2025-01-16
difficulty: Medium
num: 1947
related_topics:
  - Array
  - Backtracking
  - Bit Manipulation
  - Bitmask
  - Dynamic Programming
return: Done
---

# Problem: 1947. Maximum Compatibility Score Sum

## Description

## Approach / Thoughts
check all pairs, bitmask

## Solution
```python
class Solution:
    def maxCompatibilitySum(self, students: List[List[int]], mentors: List[List[int]]) -> int:
        n = len(students)
        
        vis = 2 ** (n + 1) - 1
        s_start = m_start = (1 << n)

        def compat_score(s, m):
            return sum(1 for x, y in zip(s, m) if x == y)


        @lru_cache(None)
        def dfs(s_seen, m_seen):
            if s_seen == vis:
                return 0

            res = 0
            for i, A in enumerate(students):
                for j, B in enumerate(mentors):
                    if s_seen & (1 << i) or m_seen & (1 << j):
                        continue

                    new_s = s_seen | (1 << i)
                    new_m = m_seen | (1 << j)

                    res = max(res, compat_score(A, B) + dfs(new_s, new_m))
        
            return res

        return dfs(s_start, m_start)
```
