---
date: 2026-05-18
difficulty: Hard
num: 2835
related_topics:
  - Array
  - Greedy
  - Bit Manipulation
return: Review
---

# Problem: 2835. Minimum Operations to Form Subsequence With Target Sum

## Description
You are given a **0-indexed** array `nums` consisting of **non-negative** powers of `2`, and an integer `target`.

In one operation, you must apply the following changes to the array:

	Choose any element of the array `nums[i]` such that `nums[i] > 1`.

	Remove `nums[i]` from the array.

	Add **two** occurrences of `nums[i] / 2` to the **end** of `nums`.

Return the ***minimum number of operations** you need to perform so that *`nums`* contains a **subsequence** whose elements sum to* `target`. If it is impossible to obtain such a subsequence, return `-1`.

A **subsequence** is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

## Approach / Thoughts
greedy - find the smallest number that can't fit - use that to split bits 
intuition is that sum automatically tracks assigning right bits 
total number of splits is only logn

## Solution
```python
from sortedcontainers import SortedList

class Solution:
    def minOperations(self, nums: List[int], target: int) -> int:

        if sum(nums) < target:
            return -1 

        sl = SortedList(nums)

        res = 0
        skip = None

        for _ in range(32):
            tot = 0
            for i in range(len(sl)-1,-1,-1):
                if tot + sl[i] > target:
                    skip = i
                    continue 
                tot += sl[i]

            if tot == target:
                return res 
            
            res += 1
            v = sl.pop(skip)
            sl.add(v // 2)
            sl.add(v // 2)
```