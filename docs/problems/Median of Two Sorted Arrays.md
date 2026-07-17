---
date: 2024-06-22
difficulty: Hard
num: 4
related_topics:
  - Array
  - Binary Search
  - Divide and Conquer
return: Review
---

# Problem: 4. Median Of Two Sorted Arrays

## Description

## Approach / Thoughts
find min array

binary search on that for our left partition

check bounds if we can make valid partition, draw it out

handle edge cases where out of bounds, inf on both sides

if one is invalid shrink or expand window

## Solution
```python
class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        A, B = nums1, nums2
        lenA, lenB = len(A), len(B)

        total = lenA + lenB
        half = total // 2

        if lenA > lenB:
            A, B = B, A
            lenA, lenB = lenB, lenA

        l, r = 0, lenA-1
        while True:
            midA = (l + r) // 2
            midB = half - midA - 2

            leftA = A[midA] if midA >= 0 else float("-inf")
            rightA = A[midA + 1] if (midA + 1) < lenA else float("inf")

            leftB = B[midB] if midB >= 0 else float("-inf")
            rightB = B[midB + 1] if (midB + 1) < lenB else float("inf")

            if leftA <= rightB and leftB <= rightA:
                if total % 2 == 0:
                    l_median = max(leftA, leftB)
                    r_median = min(rightA, rightB)
                    return (l_median + r_median) / 2
                else:
                    return min(rightA, rightB)
            elif leftA > rightB:
                r = midA - 1
            else:
                l = midA + 1
```
