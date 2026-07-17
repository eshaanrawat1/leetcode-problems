---
date: 2026-06-06
difficulty: Easy
num: 2574
related_topics:
  - Array
  - Prefix Sum
return:
---

# Problem: 2574. Left and Right Sum Differences

## Description
You are given a **0-indexed** integer array `nums` of size `n`.

Define two arrays `leftSum` and `rightSum` where:

	- `leftSum[i]` is the sum of elements to the left of the index `i` in the array `nums`. If there is no such element, `leftSum[i] = 0`.

	- `rightSum[i]` is the sum of elements to the right of the index `i` in the array `nums`. If there is no such element, `rightSum[i] = 0`.

Return an integer array `answer` of size `n` where `answer[i] = |leftSum[i] - rightSum[i]|`.

## Approach / Thoughts
brute force

## Solution
```python
class Solution:
    def leftRightDifference(self, nums: List[int]) -> List[int]:
        n = len(nums)
        
        res = []
        for i in range(n):
            l = sum(nums[:i])
            r = sum(nums[i+1:])
            res.append(abs(l-r))
        return res
```