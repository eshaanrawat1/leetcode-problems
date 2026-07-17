---
date: 2024-05-11
difficulty: Easy
num: 441
related_topics:
  - Binary Search
  - Math
return: Done
---

# Problem: 441. Arranging Coins

## Description
see max consec sequence starting at 1 to make n

## Approach / Thoughts
binary search with sum rule for consecutive numbers

## Solution
```python
class Solution:
    def arrangeCoins(self, n: int) -> int:
        l, r = 1, n
        res = 0

        while l <= r:
            mid = (l + r) // 2
            coins = (mid * (mid+1)) / 2

            if coins > n:
                r = mid-1
            else:
                res = max(res, mid)
                l = mid+1
        return res
```
