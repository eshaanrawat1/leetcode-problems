---
date: 2024-06-26
difficulty: Medium
num: 55
related_topics:
  - Array
  - Dynamic Programming
  - Greedy
return: Done
---

# Problem: 55. Jump Game

## Description
see if we can jump to last index

## Approach / Thoughts
top down dp with cache

shifting goalposts being greedy

## Solution
```python
class Solution:
    def canJump(self, nums: List[int]) -> bool:
        goalpost = len(nums)-1

        for i in range(len(nums)-2,-1,-1):
            if nums[i] >= (goalpost - i):
                goalpost = i
        return goalpost == 0
```
