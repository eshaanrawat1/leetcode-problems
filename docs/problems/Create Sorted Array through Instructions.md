---
date: 2026-07-08
difficulty: Hard
num: 1649
related_topics:
  - Array
  - Binary Search
  - Divide and Conquer
  - Binary Indexed Tree
  - Segment Tree
  - Merge Sort
  - Ordered Set
return:
---

# Problem: 1649. Create Sorted Array through Instructions

## Description
Given an integer array `instructions`, you are asked to create a sorted array from the elements in `instructions`. You start with an empty container `nums`. For each element from **left to right** in `instructions`, insert it into `nums`. The **cost** of each insertion is the **minimum** of the following:

	- The number of elements currently in `nums` that are **strictly less than** `instructions[i]`.

	- The number of elements currently in `nums` that are **strictly greater than** `instructions[i]`.

For example, if inserting element `3` into `nums = [1,2,3,5]`, the **cost** of insertion is `min(2, 1)` (elements `1` and `2` are less than `3`, element `5` is greater than `3`) and `nums` will become `[1,2,3,3,5]`.

Return *the **total cost** to insert all elements from *`instructions`* into *`nums`. Since the answer may be large, return it **modulo** `109 + 7`

## Approach / Thoughts
basic sorted list, use bisect left for all elements to left, bisect right and subtract from n for all elements to the right
note - use s.bisect for optimized methods, speeds up by almost 10x

## Solution
```python
from sortedcontainers import SortedList

class Solution:
    def createSortedArray(self, A: List[int]) -> int:
        mod = 10**9+7
        n = len(A)
        res = 0

        s = SortedList()
        slen = 0
        
        for x in A:
            l = s.bisect_left(x)
            r = len(s) - s.bisect_right(x)
            res += min(l, r)
            res %= mod
            s.add(x)
        return res
```