---
date: 2024-02-23
difficulty: Easy
num: 896
related_topics:
  - Array
return: Done
---

# Problem: 896. Monotonic Array

## Description
Check if array is monotone increase or decrease

## Approach / Thoughts
Have two bool checks and run a for loop

## Solution
```python
class Solution:
    def isMonotonic(self, nums: List[int]) -> bool:
        check_increase, check_decrease = True, True

        for i in range(1, len(nums)):
            if nums[i] < nums[i-1]:
                check_increase = False
            if nums[i] > nums[i-1]:
                check_decrease = False
        return check_increase or check_decrease
        
        
```
