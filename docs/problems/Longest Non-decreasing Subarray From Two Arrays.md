---
date: 2025-07-04
difficulty: Medium
num: 2771
related_topics:
  - Array
  - Dynamic Programming
return: Done
---

# Problem: 2771. Longest Non Decreasing Subarray From Two Arrays

## Description

## Approach / Thoughts
dp for increasing subarray but can pick from either top or bottom

## Solution
```python
class Solution:
    def maxNonDecreasingLength(self, nums1: List[int], nums2: List[int]) -> int:
        res, N = 0, len(nums1)

        tdp = [1] * (N+1)
        bdp = [1] * (N+1)

        for i in range(1, N):
            x = nums1[i]
            y = nums2[i]

            px = nums1[i-1]
            py = nums2[i-1]

            if x >= px and x >= py:
                tdp[i] = max(tdp[i], 1 + tdp[i-1], 1 + bdp[i-1])
            elif x >= px:
                tdp[i] = max(tdp[i], 1 + tdp[i-1])
            elif x >= py:
                tdp[i] = max(tdp[i], 1 + bdp[i-1])

            if y >= px and y >= py:
                bdp[i] = max(bdp[i], 1 + tdp[i-1], 1 + bdp[i-1])
            elif y >= px:
                bdp[i] = max(bdp[i], 1 + tdp[i-1])
            elif y >= py:
                bdp[i] = max(bdp[i], 1 + bdp[i-1])
        
        return max(max(tdp), max(bdp))
```
