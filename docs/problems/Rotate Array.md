---
date: 2026-04-22
difficulty: Medium
num: 189
related_topics:
  - Array
  - Math
  - Two Pointers
return:
---

# Problem:  

## Description
Given an integer array `nums`, rotate the array to the right by `k` steps, where `k` is non-negative.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
reverse groups 

A + B -> B + A
A + B -> rev -> rev(B) + rev(A)
fix revs

## Solution
```python
class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """

        def rev(start, end):
            l, r = start, end
            while l < r:
                nums[l], nums[r] = nums[r], nums[l]
                l += 1
                r -= 1

        n = len(nums)
        k %= n

        rev(0, n-1)
        rev(0, k-1)
        rev(k, n-1)
        