---
date: 2024-04-16
difficulty: Medium
num: 2270
related_topics:
  - Array
  - Prefix Sum
return: Done
---

# Problem: 2270. Number Of Ways To Split Array

## Description
left sum = right sum find number of ways to split

## Approach / Thoughts
prefix left and right sums

## Solution
```python
class Solution:
    def waysToSplitArray(self, nums: List[int]) -> int:
        lSum, rSum = 0, sum(nums)
        splits = 0

        for i in range(len(nums)-1):
            lSum += nums[i]
            rSum -= nums[i]

            if lSum >= rSum:
                splits += 1
        return splits
```
