---
date: 2026-06-28
difficulty: Medium
num: 3969
related_topics:
  - 
return:
---

# Problem: 3969. Valid Subarrays With Matching Sum Digits I

## Description
You are given an integer array `nums` and an integer digit `x`.

A **subarray** `nums[l..r]` is considered **valid** if the sum of its elements satisfies both of the following conditions:

	- The first digit of the sum is equal to `x`.

	- The last digit of the sum is equal to `x`.

Return the number of valid subarrays.

## Approach / Thoughts
[[Weekly Contest 507]]

brute force on every subarray -> some extra pruning

## Solution
```python
class Solution:
    def countValidSubarrays(self, nums: list[int], x: int) -> int:
        n = len(nums)

        def valid(num):
            s = str(num)
            return int(s[0]) == int(s[-1]) == x

        res = 0
        for i in range(n):
            cur = 0
            for j in range(i, n):
                cur += nums[j]
                if cur % 10 != x:
                    continue
                res += (valid(cur))
        return res
```