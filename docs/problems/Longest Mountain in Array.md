---
date: 2024-10-30
difficulty: Medium
num: 845
related_topics:
  - Array
  - Dynamic Programming
  - Enumeration
  - Two-Pointer
return: Done
---

# Problem: 845. Longest Mountain In Array

## Description

## Approach / Thoughts
scan left right for each point

## Solution
```python
class Solution:
    def longestMountain(self, arr: List[int]) -> int:
        res = 0
        for i in range(1, len(arr)-1):
            tmp_l = tmp_r = arr[i]

            l = r = i
            while l - 1 >= 0 and arr[l-1] < tmp_l:
                tmp_l = arr[l-1]
                l -= 1

            while r + 1 < len(arr) and arr[r+1] < tmp_r:
                tmp_r = arr[r+1]
                r += 1

            if r >= i+1 and l <= i-1:
                res = max(res, r - l + 1)
        return res if res >= 3 else 0
```
