---
date: 2026-06-08
difficulty: Medium
num: 3689
related_topics:
  - Array
  - Greedy
return:
---

# Problem: 3689. Maximum Total Subarray Value I

## Description
You are given an integer array `nums` of length `n` and an integer `k`.

You need to choose **exactly** `k` non-empty subarrays `nums[l..r]` of `nums`. Subarrays may overlap, and the exact same subarray (same `l` and `r`) **can** be chosen more than once.

The **value** of a subarray `nums[l..r]` is defined as: `max(nums[l..r]) - min(nums[l..r])`.

The **total value** is the sum of the **values** of all chosen subarrays.

Return the **maximum** possible total value you can achieve.

## Approach / Thoughts
choose the best subarray k times
since it is max - min the best subarray is the whole array since it includes the biggest and smallest possible numbers

## Solution
```python
class Solution:
    def maxTotalValue(self, nums: List[int], k: int) -> int:
        m2 = max(nums)
        m1 = min(nums)
        return k * (m2 - m1)
```