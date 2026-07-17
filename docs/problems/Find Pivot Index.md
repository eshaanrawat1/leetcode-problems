---
date: 2024-02-09
difficulty: Easy
num: 724
related_topics:
  - Array
  - Prefix Sum
return: Done
---

# Problem: 724. Find Pivot Index

## Description
Find an index where everything to the left is equal to sum everything to the right

## Approach / Thoughts
Build prefix and postfix array for each index

## Solution
```python
class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        prefix, postfix = [0] * len(nums), [0] * len(nums)
        for i in range(1, len(nums)):
            prefix[i] += nums[i-1] + prefix[i-1]
        for j in range(len(nums)-2,-1,-1):
            postfix[j] += nums[j+1] + postfix[j+1]

        for i in range(len(prefix)):
            if prefix[i] == postfix[i]: return i
        return -1
```
