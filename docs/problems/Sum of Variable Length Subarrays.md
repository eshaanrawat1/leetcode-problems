---
date: 2026-05-13
difficulty: Easy
num: 3427
related_topics:
  - Array
  - Prefix Sum
return:
---

# Problem: 3427. Sum of Variable Length Subarrays

## Description
You are given an integer array `nums` of size `n`. For **each** index `i` where `0 subarray `nums[start ... i]` where `start = max(0, i - nums[i])`.

Return the total sum of all elements from the subarray defined for each index in the array.

## Approach / Thoughts
[[Weekly Contest 433]]

brute force

## Solution
```python
class Solution:
    def subarraySum(self, nums: List[int]) -> int:
        res = 0
        n = len(nums)
        
        for i in range(n):
            start = max(0, i - nums[i])
            res += sum(nums[start:i+1])
        return res
```