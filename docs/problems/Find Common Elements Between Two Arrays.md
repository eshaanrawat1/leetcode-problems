---
date: 2023-12-29
difficulty: Easy
num: 2956
related_topics:
  - Array
  - Hash Table
return: Done
---

# Problem: 2956. Find Common Elements Between Two Arrays

## Description
Find number of indices in the other array in which the element at that index in the other array.

## Approach / Thoughts
2-pass to check and have counters to check how many indices are common

## Solution
```python
class Solution:
    def findIntersectionValues(self, nums1: List[int], nums2: List[int]) -> List[int]:
        first, second = 0, 0
        for i in range(len(nums1)):
            if nums1[i] in nums2:
                first += 1

        for j in range(len(nums2)):
            if nums2[j] in nums1:
                second += 1
        
        return [first, second]
```
