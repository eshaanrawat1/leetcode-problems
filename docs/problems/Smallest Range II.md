---
date: 2026-06-20
difficulty: Medium
num: 910
related_topics:
  - Array
  - Math
  - Greedy
  - Sorting
return: Review
---

# Problem: 910. Smallest Range II

## Description
You are given an integer array `nums` and an integer `k`.

For each index `i` where `0 <= i < nums.length`, change `nums[i]` to be either `nums[i] + k` or `nums[i] - k`.

The **score** of `nums` is the difference between the maximum and minimum elements in `nums`.

Return *the minimum **score** of *`nums`* after changing the values at each index*.

## Approach / Thoughts
test all possible pivot points
after sorting, we only need to worry about the max and min numbers, which could be a few options depending on how big k is. get the best possible pivot split

exchange arg proof that solution must be in the form + + + - - - 
so it just becomes finding the new min and max among the possible new cands

## Solution
```python
class Solution:
    def smallestRangeII(self, nums: List[int], k: int) -> int:
        n = len(nums)
        nums.sort()

        res = nums[-1] - nums[0]

        for i in range(1, n):
            x = min(nums[0] + k, nums[i] - k)
            y = max(nums[-1] - k, nums[i-1] + k)
            res = min(res, y - x)
        return res
```