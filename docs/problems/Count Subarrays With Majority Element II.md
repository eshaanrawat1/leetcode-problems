---
date: 2026-06-26
difficulty: Hard
num: 3739
related_topics:
  - Array
  - Hash Table
  - Divide and Conquer
  - Segment Tree
  - Merge Sort
  - Prefix Sum
return: Review
---

# Problem: 3739. Count Subarrays With Majority Element II

## Description
You are given an integer array `nums` and an integer `target`.

Return the number of **subarrays** of `nums` in which `target` is the **majority element**.

The **majority element** of a subarray is the element that appears **strictly more than half** of the times in that subarray.

## Approach / Thoughts
use prefix sums to represent the majority count of a subarray
- from l to r inclusive, the prefix sum is `p[r] - p[l-1]`
- if we use -1 for non target and 1 for target, then if the prefix sum of a subarray is > 0, then that subarray has target as the majority element
- count `p[r] - p[l-1] > 0` which becomes `p[r] > p[l-1]`, for all indices r, l-1. special case - include a 0 as the empty prefix to start, ie if we have `nums = [2], target = 2` 

## Solution
```python
from sortedcontainers import SortedList

class Solution:
    def countMajoritySubarrays(self, nums: List[int], target: int) -> int:
        
        ps = [1 if n == target else -1 for n in nums]
        for i in range(1, len(ps)):
            ps[i] += ps[i-1]

        res = 0

        sl = SortedList([0])
        for p in ps:
            res += bisect_left(sl, p)
            sl.add(p)
        return res
```