---
date: 2026-05-08
difficulty: Medium
num: 3091
related_topics:
  - Math
  - Greedy
  - Enumeration
return:
---

# Problem: 3091. Apply Operations to Make Sum of Array Greater Than or Equal to k

## Description
You are given a **positive** integer `k`. Initially, you have an array `nums = [1]`.

You can perform **any** of the following operations on the array **any** number of times (**possibly zero**):

	Choose any element in the array and **increase** its value by `1`.

	Duplicate any element in the array and add it to the end of the array.

Return *the **minimum** number of operations required to make the **sum** of elements of the final array greater than or equal to *`k`.

## Approach / Thoughts

[[Weekly Contest 390]]

inc first then dup

## Solution
```python
class Solution:
    def minOperations(self, k: int) -> int:
        if k == 1:
            return 0

        res = inf
        incs = 0
        cur = 1
        
        while cur < k:
            dups = ceil((k-cur) / cur)
            res = min(res, incs + dups)
            incs += 1
            cur += 1
        return res
```