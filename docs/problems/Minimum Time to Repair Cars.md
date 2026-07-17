---
date: 2025-03-16
difficulty: Medium
num: 2594
related_topics:
  - Array
  - Binary Search
return: Done
---

# Problem: 2594. Minimum Time To Repair Cars

## Description

## Approach / Thoughts
since each car can be repaired at same time

check max possible cars each mechanic can take, binary search

## Solution
```python
class Solution:
    def repairCars(self, ranks: List[int], cars: int) -> int:
        
        def bs(threshold):
            cur_cars = cars

            # r * n^2 <= threshold

            for r in ranks:
                cur_cars -= floor(sqrt(threshold // r))
            return cur_cars <= 0

        l, r = 1, 10**15
        res = -1

        while l <= r:
            m = (l + r) // 2
            if bs(m):
                r = m - 1
                res = m
            else:
                l = m + 1
        return res
```
