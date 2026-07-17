---
date: 2025-04-15
difficulty: Hard
num: 2179
related_topics:
  - Array
  - Binary Indexed Tree
  - Binary Search
  - Divide and Conquer
  - Merge Sort
  - Ordered Set
  - Segment Tree
return: Review
---

# Problem: 2179. Count Good Triplets In An Array

## Description
same, where index of values in ascending order in both arrays

## Approach / Thoughts
create new array where condition 1 holds and idx of condition 2

find increasing triplets

smaller to left numbers * larger to right

use sorted list and binary search to find nums

## Solution
```python
from sortedcontainers import SortedList

class Solution:
    def goodTriplets(self, nums1: List[int], nums2: List[int]) -> int:
        
        idx1 = {v:i for i,v in enumerate(nums1)}


        n = len(nums1)
        nums = [-1] * n

        for i, v in enumerate(nums2):
            nums[i] = idx1[v]

        smaller = [0] * n
        greater = [0] * n


        def smaller_left():
            sl = SortedList()

            for i in range(n):
                idx = bisect_left(sl, nums[i])
                smaller[i] = idx
                sl.add(nums[i])
        
        def larger_right():
            sl = SortedList()
            cnt = 0
            
            for i in range(n-1, -1, -1):
                idx = bisect_left(sl, nums[i])
                greater[i] = cnt - idx
                sl.add(nums[i])
                cnt += 1

        smaller_left()
        larger_right()

        return sum(smaller[i] * greater[i] for i in range(n))
```
