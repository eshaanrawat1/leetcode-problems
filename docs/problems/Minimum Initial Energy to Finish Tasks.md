---
date: 2025-01-31
difficulty: Hard
num: 1665
related_topics:
  - Array
  - Greedy
  - Sorting
return: Done
---

# Problem: 1665. Minimum Initial Energy To Finish Tasks

## Description

## Approach / Thoughts
sort by diff binary search

## Solution
```python
class Solution:
    def minimumEffort(self, tasks: List[List[int]]) -> int:
        tasks.sort(key=lambda x:(x[0]-x[1]))
        
        def check(threshold):
            cur = threshold

            for a, m in tasks:
                if cur < m:
                    return False
                cur -= a
            return cur >= 0

        l, r = 1, 1e9
        res = None

        while l <= r:
            mid = (l + r) // 2
            if check(mid):
                res = mid
                r = mid - 1
            else:
                l = mid + 1
        return int(res)
```
