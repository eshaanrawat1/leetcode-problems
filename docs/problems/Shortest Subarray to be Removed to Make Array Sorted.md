---
date: 2024-11-14
difficulty: Medium
num: 1574
related_topics:
  - Array
  - Binary Search
  - Monotonic Stack
  - Stack
  - Two-Pointer
return: Review
---

# Problem: 1574. Shortest Subarray To Be Removed To Make Array Sorted

## Description

## Approach / Thoughts
find non increase in middle and check left and right

## Solution
```python
class Solution:
    def findLengthOfShortestSubarray(self, arr: List[int]) -> int:
        l, r = 0, len(arr) - 1
        while l < r and arr[l + 1] >= arr[l]:
            l += 1

        if l == r:
            return 0

        while r > 0 and arr[r-1] <= arr[r]:
            r -= 1
        
        to_remove = min(len(arr) - l - 1, r)

        # 1 2 3 10 4 2 3 5
        #        l   r

        j = r
        for i in range(l + 1):
            while j <= len(arr) - 1 and arr[i] > arr[j]:
                j += 1
            if j == len(arr):
                break
            to_remove = min(to_remove, j - i - 1)
        return to_remove
```
