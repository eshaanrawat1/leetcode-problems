---
date: 2026-04-30
difficulty: Medium
num: 1764
related_topics:
  - Array
  - Two Pointers
  - Greedy
  - String Matching
return:
---

# Problem:  

## Description
You are given a 2D integer array `groups` of length `n`. You are also given an integer array `nums`.

You are asked if you can choose `n` **disjoint** subarrays from the array `nums` such that the `ith` subarray is equal to `groups[i]` (**0-indexed**), and if `i > 0`, the `(i-1)th` subarray appears **before** the `ith` subarray in `nums` (i.e. the subarrays must be in the same order as `groups`).

Return `true` _if you can do this task, and_ `false` _otherwise_.

Note that the subarrays are **disjoint** if and only if there is no index `k` such that `nums[k]` belongs to more than one subarray. A subarray is a contiguous sequence of elements within an array.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
[[Biweekly Contest 46]]

check group by group update last index

## Solution
```python
class Solution:
    def canChoose(self, groups: List[List[int]], nums: List[int]) -> bool:
        N = len(nums)
        last_idx = -1
        
        for g in groups:
            m = len(g)
            found = False

            arr = [nums[i:i+m] for i in range(0, N)]
            
            for i, a in enumerate(arr):
                if g == a:
                    if i <= last_idx:
                        continue

                    last_idx = i+m-1
                    found = True
                    break

            if not found: return False    
        return True