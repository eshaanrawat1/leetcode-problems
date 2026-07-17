---
date: 2026-05-03
difficulty: Hard
num: 3920
related_topics:
  - Array
  - Binary Search
return: Review
---

# Problem:  

## Description
You are given an integer array `nums`.

A position `i` is called a **fixed point** if `nums[i] == i`.

You are allowed to delete **any** number of elements (including zero) from the array. After each deletion, the remaining elements **shift left**, and indices are reassigned starting from 0.

Return an integer denoting the **maximum** number of fixed points that can be achieved after performing any number of deletions.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
[[Weekly Contest 500]]

lis -> russian doll envelopes
## Solution
```python
class Solution:
    def maxFixedPoints(self, nums: list[int]) -> int:
        
        res = []
        for i, x in enumerate(nums):
            if i - x >= 0:
                res.append((x, i-x))

        res.sort(key=lambda x: (x[0], -x[1]))

        sub = []
        for x, shift in res:
            j = bisect_right(sub, shift)
            if j == len(sub):
                sub.append(shift)
            else:
                sub[j] = shift
        return len(sub)
