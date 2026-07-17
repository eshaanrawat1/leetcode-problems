---
date: 2025-04-01
difficulty: Easy
num: 2873
related_topics:
  - Array
return: Done
---

# Problem: 2873. Maximum Value Of An Ordered Triplet I

## Description
max i-j*k (values at indices such that i < j < k)

## Approach / Thoughts
brute force

## Solution
```python
class Solution:
    def maximumTripletValue(self, nums: List[int]) -> int:
        n = len(nums)

        res = 0
        for i in range(n):
            for j in range(i+1, n):
                for k in range(j+1, n):
                    res = max(res, (nums[i] - nums[j]) * nums[k])
        return res
```
