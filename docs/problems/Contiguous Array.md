---
date: 2024-03-15
difficulty: Medium
num: 525
related_topics:
  - Array
  - Hash Table
  - Prefix Sum
return: Done
---

# Problem: 525. Contiguous Array

## Description
In binary array find max subarray length where number of 1s is equal to number of 0s.

## Approach / Thoughts
Prefix sum

## Solution
```python
class Solution:
    def findMaxLength(self, nums: List[int]) -> int:
        prefix = {}
        count = res = 0

        for i in range(len(nums)):
            if nums[i] == 0: count -= 1
            if nums[i] == 1: count += 1

            if count == 0:
                res = i+1

            if count in prefix:
                res = max(res, i-prefix[count])
            else:
                prefix[count] = i
        return res
```
