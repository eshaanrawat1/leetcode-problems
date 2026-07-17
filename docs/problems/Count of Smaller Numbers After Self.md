---
date: 2025-04-15
difficulty: Hard
num: 315
related_topics:
  - Array
  - Binary Indexed Tree
  - Binary Search
  - Divide and Conquer
  - Merge Sort
  - Ordered Set
  - Segment Tree
return: Done
---

# Problem: 315. Count Of Smaller Numbers After Self

## Description

## Approach / Thoughts
count inversions merge sort

keep track of indexes

## Solution
```python
class Solution:
    def countSmaller(self, nums: List[int]) -> List[int]:
        
        def merge(nums1, nums2):
            n1, n2 = len(nums1), len(nums2)
            i = j = 0
            res = []

            while i < n1 and j < n2:
                v1, idx1 = nums1[i]
                v2, idx2 = nums2[j]

                if v1 <= v2: 
                    inv[idx1] += j
                    res.append(nums1[i])
                    i += 1
                else:
                    res.append(nums2[j])
                    j += 1

            while i < n1:
                res.append(nums1[i])
                v1, idx1 = nums1[i]
                inv[idx1] += j
                i += 1
            
            while j < n2:
                res.append(nums2[j])
                j += 1

            return res


        inv = [0] * len(nums)
        pairs = [(v, i) for i, v in enumerate(nums)]

        def mergesort(arr):
            if len(arr) <= 1:
                return arr[:]

            mid = len(arr) // 2

            left = mergesort(arr[:mid])
            right = mergesort(arr[mid:])
            return merge(left, right)

        mergesort(pairs)
        return inv
```
