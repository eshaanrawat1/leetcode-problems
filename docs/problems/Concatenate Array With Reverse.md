---
date: 2026-05-11
difficulty: Easy
num: 3925
related_topics:
  - 
return:
---

# Problem: 3925. Concatenate Array With Reverse

## Description
You are given an integer array `nums` of length `n`.

Construct a new array `ans` of length `2 * n` such that the first `n` elements are the same as `nums`, and the next `n` elements are the elements of `nums` in reverse order.

Formally, for `0 
**Input:** nums = [1,2,3]

**Output:** [1,2,3,3,2,1]

**Explanation:**

The first `n` elements of `ans` are the same as `nums`.

For the next `n = 3` elements, each element is taken from `nums` in reverse order:

	`ans[3] = nums[2] = 3`

	`ans[4] = nums[1] = 2`

	`ans[5] = nums[0] = 1`

Thus, `ans = [1, 2, 3, 3, 2, 1]`.

## Approach / Thoughts
[[Weekly Contest 501]]


concat

## Solution
```python
class Solution:
    def concatWithReverse(self, nums: list[int]) -> list[int]:
        return nums + nums[::-1]
```