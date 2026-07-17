---
date: 2025-05-09
difficulty: Medium
num: 2918
related_topics:
  - Array
  - Greedy
return: Done
---

# Problem: 2918. Minimum Equal Sum Of Two Arrays After Replacing Zeros

## Description
same, replace 0 with any positive int

## Approach / Thoughts
check case if 0 not in array separately

otherwise one can always make the other

## Solution
```python
class Solution:
    def minSum(self, nums1: List[int], nums2: List[int]) -> int:
        in1 = 0 in nums1
        in2 = 0 in nums2

        def apply():
            arr1 = [max(1,n) for n in nums1]
            arr2 = [max(1,n) for n in nums2]

            s1 = sum(arr1)
            s2 = sum(arr2)

            return arr1, arr2, s1, s2
        
        if not in1 and not in2:
            return -1 if sum(nums1) != sum(nums2) else sum(nums1)

        elif not in1:
            nums1, nums2, s1, s2 = apply()
            if s1 < s2:
                return -1

        elif not in2:
            nums1, nums2, s1, s2 = apply()
            if s2 < s1:
                return -1

        nums1, nums2, s1, s2 = apply()
        return max(s1, s2)
```
