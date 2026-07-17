---
date: 2024-05-11
difficulty: Easy
num: 69
related_topics:
  - Binary Search
  - Math
return: Done
---

# Problem: 69. Sqrt(X)

## Description
find root x

## Approach / Thoughts
binary search keep track of closest number with square < x

## Solution
```python
class Solution:
    def mySqrt(self, x: int) -> int:
        l, r = 0, x
        root = 0

        while l <= r:
            mid = (l + r) // 2
            sq = mid * mid

            if sq == x:
                return mid
            elif sq > x:
                r = mid-1
            else:
                l = mid+1
                root = max(root, mid) 
        return root
```
