---
date: 2024-06-19
difficulty: Medium
num: 1552
related_topics:
  - Array
  - Binary Search
  - Sorting
return: Done
---

# Problem: 1552. Magnetic Force Between Two Balls

## Description
find max force between bins

## Approach / Thoughts
binary search with all possible forces

## Solution
```python
class Solution:
    def maxDistance(self, position: List[int], m: int) -> int:
        position.sort()
        def feasible(force):
            balls, prev = 0, float("-inf")
            for p in position:
                if p - prev >= force:
                    balls += 1
                    prev = p
            return balls >= m

        l, r = 1, max(position)
        while l <= r:
            mid = (l + r) // 2
            if feasible(mid):
                l = mid + 1
            else:
                r = mid - 1
        return l - 1
```
