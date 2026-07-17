---
date: 2025-04-13
difficulty: Easy
num: 1534
related_topics:
  - Array
  - Enumeration
return: Done
---

# Problem: 1534. Count Good Triplets

## Description

## Approach / Thoughts
brute force

## Solution
```python
class Solution:
    def countGoodTriplets(self, arr: List[int], a: int, b: int, c: int) -> int:
        n = len(arr)
        res = 0

        for i in range(n):
            for j in range(i+1, n):
                for k in range(j+1, n):
                    da = abs(arr[i] - arr[j])
                    db = abs(arr[j] - arr[k])
                    dc = abs(arr[i] - arr[k])

                    res += (da <= a and db <= b and dc <= c)    
        return res
```
