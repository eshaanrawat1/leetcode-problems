---
date: 2025-03-22
difficulty: Medium
num: 1685
related_topics:
  - Array
  - Math
  - Prefix Sum
return: Done
---

# Problem: 1685. Sum Of Absolute Differences In A Sorted Array

## Description

## Approach / Thoughts
left prefix sum and right prefix sum

## Solution
```python
class Solution:
    def getSumAbsoluteDifferences(self, nums: List[int]) -> List[int]:
        n = len(nums)
        ps = nums[:]

        for i in range(1, n):
            ps[i] += ps[i-1]

        res = []
        for i, x in enumerate(nums):
            num_right = (n - i - 1)
            num_left = (i)

            right_sum = left_sum = 0

            if num_right:
                right_sum = ps[-1] - ps[i]
                right_sum -= (num_right * x)
            
            if num_left:
                left_sum = (num_left * x) - ps[i-1]

            res.append(right_sum + left_sum)

        return res
```
