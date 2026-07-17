---
date: 2026-04-16
difficulty: Easy
num: 3880
related_topics:
  - Array
  - Enumeration
return:
---

# Problem:  

## Description
You are given an integer array `nums` consisting only of 0, 1, and 2.

A pair of indices `(i, j)` is called **valid** if `nums[i] == 1` and `nums[j] == 2`.

Return the **minimum** absolute difference between `i` and `j` among all valid pairs. If no valid pair exists, return -1.

The absolute difference between indices `i` and `j` is defined as `abs(i - j)`.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
brute force

## Solution
```python
class Solution:
    def minAbsoluteDifference(self, nums: list[int]) -> int:
        n = len(nums)
        res = inf

        for i in range(n):
            for j in range(n):
                if nums[i] == 1 and nums[j] == 2:
                    res = min(res, abs(i-j))
        return res if res != inf else -1