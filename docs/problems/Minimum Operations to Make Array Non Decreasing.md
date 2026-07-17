---
date: 2026-04-26
difficulty: Medium
num: 3914
related_topics:
  - Array
  - String
return:
---

# Problem:  

## Description
You are given an integer array `nums` of length `n`.

In one operation, you may choose any **subarray** `nums[l..r]` and **increase** each element in that **subarray** by `x`, where `x` is any **positive** integer.

Return the **minimum** possible **sum** of the values of `x` across all operations required to make the array **non-decreasing**.

An array is **non-decreasing** if `nums[i] <= nums[i + 1]` for all `0 <= i < n - 1`.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
count adjacent drops

## Solution
```python
class Solution:
    def minOperations(self, nums: list[int]) -> int:
        # 16:22
        
        n = len(nums)

        res = 0
        for i in range(1, n):
            prv = nums[i-1]
            cur = nums[i]
            res += max(0, prv - cur)
        return res

