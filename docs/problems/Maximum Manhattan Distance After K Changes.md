---
date: 2025-06-20
difficulty: Medium
num: 3443
related_topics:
  - Counting
  - Hash Table
  - Math
  - String
return: Done
---

# Problem: 3443. Maximum Manhattan Distance After K Changes

## Description

## Approach / Thoughts
check max we can go in every diagonal

## Solution
```python
class Solution:
    def maxDistance(self, s: str, k: int) -> int:
        
        def diag(d1, d2, k):
            mdist = max_mdist = 0
            for c in s:
                if c == d1 or c == d2:
                    mdist += 1
                else:
                    if k:
                        k -= 1
                        mdist += 1
                    else:
                        mdist -= 1
                max_mdist = max(max_mdist, mdist)
            return max_mdist

        
        tr = diag('N', 'E', k)
        tl = diag('N', 'W', k)
        br = diag('S', 'E', k)
        bl = diag('S', 'W', k)

        return max(tr, tl, br, bl)
```
