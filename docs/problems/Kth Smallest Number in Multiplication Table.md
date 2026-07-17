---
date: 2024-08-05
difficulty: Hard
num: 668
related_topics:
  - Binary Search
  - Math
return: Done
---

# Problem: 668. Kth Smallest Number In Multiplication Table

## Description

## Approach / Thoughts
find N with ≥ k pairs less than N

start j at end

for each row, decrement j to find num pairs

## Solution
```python
class Solution:
    def findKthNumber(self, m: int, n: int, k: int) -> int:
        def feasible(threshold):
            count, j = 0, n

            for i in range(1, m+1):
                while j >= 0 and (i * j) > threshold:
                    j -= 1
                count += j
            return count >= k

        res = None
        l, r = 1, m*n
        
        while l <= r:
            mid = (l + r) // 2
            if feasible(mid):
                res = mid
                r = mid - 1
            else:
                l = mid + 1
        return res
```
