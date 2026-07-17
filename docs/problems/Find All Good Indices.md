---
date: 2025-01-15
difficulty: Medium
num: 2420
related_topics:
  - Array
  - Dynamic Programming
  - Prefix Sum
return: Done
---

# Problem: 2420. Find All Good Indices

## Description
same, dec to left inc to right

## Approach / Thoughts
walk the trails for both, precompute valids

## Solution
```python
class Solution:
    def goodIndices(self, nums: List[int], x: int) -> List[int]:
        n = len(nums)

        dec = [1] * (n + 1)
        inc = [1] * (n + 1)

        i = 0
        while i < n:
            j = i + 1
            while j < n and nums[j] <= nums[j-1]:
                dec[j + 1] = j - i + 1
                j += 1
            i = j

        i = 0
        while i < n:
            j = i + 1
            while j < n and nums[j] >= nums[j-1]:
                j += 1
            
            for k in range(i, j):
                inc[k-1] = j - k
            i = j

        dec[0], inc[-2] = 0, 0
        return [i for i in range(n) if dec[i] >= x and inc[i] >= x] 
```
