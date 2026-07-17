---
date: 2024-04-27
difficulty: Easy
num: 3131
related_topics:
  - Array
return: Done
---

# Problem: 3131. Find The Integer Added To Array 1

## Description
every number in 1 is matched 2

## Approach / Thoughts
min should be matched

## Solution
```python
class Solution:
    def addedInteger(self, nums1: List[int], nums2: List[int]) -> int:
        return min(nums2) - min(nums1)
```
