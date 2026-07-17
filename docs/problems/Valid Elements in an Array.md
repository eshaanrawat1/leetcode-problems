---
date: 2026-04-26
difficulty: Medium
num: 3912
related_topics:
  - Array
return:
---

# Problem:  

## Description
You are given an integer array `nums`.

An element `nums[i]` is considered **valid** if it satisfies **at least** one of the following conditions:

- It is **strictly greater** than every element to its left.
- It is **strictly greater** than every element to its right.

The first and last elements are always valid.

Return an array of all valid elements in the same order as they appear in `nums`.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
[[Weekly Contest 499]]

brute force

## Solution
```python
class Solution:
    def findValidElements(self, nums: list[int]) -> list[int]:
        # 1:44
        
        res = []

        for i, n in enumerate(nums):
            if i == 0 or i == len(nums)-1:
                res.append(n)

            elif n > max(nums[:i]) or nums[i] > max(nums[i+1:]):
                res.append(n)
        return res