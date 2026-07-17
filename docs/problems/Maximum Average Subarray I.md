---
date: 2024-06-24
difficulty: Easy
num: 643
related_topics:
  - Array
  - Sliding Window
return: Done
---

# Problem: 643. Maximum Average Subarray I

## Description

## Approach / Thoughts
fixed subarray for max sum

divide by k for avg

## Solution
```python
class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        res = cur_sum = sum(nums[i] for i in range(k)) 

        for i in range(k, len(nums)):
            cur_sum += nums[i]
            cur_sum -= nums[i-k]
            res = max(res, cur_sum)
        return res / k
```
