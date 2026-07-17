---
date: 2025-03-19
difficulty: Medium
num: 3191
related_topics:
  - Array
  - Bit Manipulation
  - Prefix Sum
  - Queue
  - Sliding Window
return: Done
---

# Problem: 3191. Minimum Operations To Make Binary Array Elements Equal To One I

## Description
same, can flip three consec elements

## Approach / Thoughts
every 0 element had to be flipped at some point

try to flip sequentially whenever see a 0

## Solution
```python
class Solution:
    def minOperations(self, nums: List[int]) -> int:
        flips = 0
        n = len(nums)

        for i in range(n-2):
            if nums[i] == 0:
                nums[i] = 1 - nums[i]
                nums[i+1] = 1 - nums[i+1]
                nums[i+2] = 1 - nums[i+2]
                flips += 1
        
        return flips if sum(nums) == n else -1
```
