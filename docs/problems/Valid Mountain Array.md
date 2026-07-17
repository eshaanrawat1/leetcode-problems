---
date: 2024-08-16
difficulty: Easy
num: 941
related_topics:
  - Array
return: Done
---

# Problem: 941. Valid Mountain Array

## Description

## Approach / Thoughts
find a peak, check inc and dec

## Solution
```python
class Solution:
    def validMountainArray(self, arr: List[int]) -> bool:
        if len(arr) < 3:
            return False
        if arr == sorted(arr) or arr[::-1] == sorted(arr):
            return False

        idx = None
        for i in range(1, len(arr)):
            if arr[i] < arr[i-1]:
                idx = i-1
                break

        if not idx:
            return False

        inc = arr[:idx+1]
        dec = arr[idx:]

        for i in range(1, len(inc)):
            if inc[i] == inc[i-1]:
                return False
        for i in range(1, len(dec)):
            if dec[i] == dec[i-1]:
                return False

        return sorted(inc) == inc and sorted(dec)[::-1] == dec
```
