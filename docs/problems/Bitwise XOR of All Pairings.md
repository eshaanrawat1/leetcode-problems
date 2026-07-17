---
date: 2025-01-15
difficulty: Medium
num: 2425
related_topics:
  - Array
  - Bit Manipulation
  - Brainteaser
return: Done
---

# Problem: 2425. Bitwise Xor Of All Pairings

## Description

## Approach / Thoughts
check length times for xor

## Solution
```python
class Solution:
    def xorAllNums(self, nums1: List[int], nums2: List[int]) -> int:
        m, n = len(nums1), len(nums2)

        res = 0
        for x in nums1:
            if n % 2 != 0:
                res ^= x

        for x in nums2:
            if m % 2 != 0:
                res ^= x
        return res
```
