---
date: 2026-04-21
difficulty: Medium
num: 3904
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
prefix sum min max

## Solution
```python
class Solution:
    def firstStableIndex(self, nums: list[int], k: int) -> int:
        n = len(nums)

        maxps = [0] * n
        minps = [0] * n

        maxps[0] = nums[0]
        for i in range(1, n):
            maxps[i] = max(maxps[i-1], nums[i])

        minps[-1] = nums[-1]
        for i in range(n-2, -1, -1):
            minps[i] = min(minps[i+1], nums[i])

        for i in range(n):
            curmax = maxps[i]
            curmin = minps[i]
            if curmax - curmin <= k:
                return i
        return -1