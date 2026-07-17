---
date: 2024-08-03
difficulty: Medium
num: 1508
related_topics:
  - Array
  - Binary Search
  - Sorting
  - Two-Pointer
return: Done
---

# Problem: 1508. Range Sum Of Sorted Subarray Sums

## Description

## Approach / Thoughts
sum all subarrays

## Solution
```python
class Solution:
    def rangeSum(self, nums: List[int], n: int, left: int, right: int) -> int:
        MOD = 10 ** 9 + 7

        res = nums[:]
        for i in range(n):
            cur_sum = nums[i]
            for j in range(i+1, n):
                cur_sum += nums[j]
                res.append(cur_sum)
        res.sort()

        return sum(res[left-1:right]) % MOD
```
