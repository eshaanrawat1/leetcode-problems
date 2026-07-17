---
date: 2026-06-25
difficulty: Medium
num: 3737
related_topics:
  - Array
  - Hash Table
  - Divide and Conquer
  - Segment Tree
  - Merge Sort
  - Counting
  - Prefix Sum
return:
---

# Problem: 3737. Count Subarrays With Majority Element I

## Description
You are given an integer array `nums` and an integer `target`.

Return the number of **subarrays** of `nums` in which `target` is the **majority element**.

The **majority element** of a subarray is the element that appears **strictly** **more than half** of the times in that subarray.

## Approach / Thoughts
brute force, count in each subarray

## Solution
```python
class Solution:
    def countMajoritySubarrays(self, nums: List[int], target: int) -> int:
        n = len(nums)
        res = 0

        for i in range(n):
            cnt = Counter()
            for j in range(i, n):
                cnt[nums[j]] += 1
                if cnt[target] > (j-i+1) / 2:
                    res += 1
        return res
```