---
date: 2026-04-21
difficulty: Medium
num: 3903
related_topics:
  - Array
return:
---

# Problem:  

## Description
You are given an integer array `nums` of length `n` and an integer `k`.

For each index `i`, define its **instability score** as `max(nums[0..i]) - min(nums[i..n - 1])`.

In other words:

- `max(nums[0..i])` is the **largest** value among the elements from index 0 to index `i`.
- `min(nums[i..n - 1])` is the **smallest** value among the elements from index `i` to index `n - 1`.

An index `i` is called **stable** if its instability score is **less than or equal to** `k`.

Return the **smallest** stable index. If no such index exists, return -1.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
brute force

## Solution
```python
class Solution:
    def firstStableIndex(self, nums: list[int], k: int) -> int:

        for i in range(len(nums)):
            inst = max(nums[:i+1]) - min(nums[i:])
            if inst <= k:
                return i
        return -1