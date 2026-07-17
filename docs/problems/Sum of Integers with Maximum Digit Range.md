---
date: 2026-07-07
difficulty: Easy
num: 3982
related_topics:
  - 
return:
---

# Problem: 3982. Sum of Integers with Maximum Digit Range

## Description
You are given an integer array `nums`.

The **digit range** of an integer is defined as the difference between its **largest** digit and **smallest** digit.

For example, the digit range of 5724 is `7 - 2 = 5`.

Return the sum of all integers in `nums` whose **digit range** is equal to the **maximum digit range** among all integers in the array.

## Approach / Thoughts
[[Weekly Contest 509]]

easy brute force
## Solution
```python
class Solution:
    def maxDigitRange(self, nums: list[int]) -> int:
        
        def dig_range(x):
            s = str(x)
            return int(max(s)) - int(min(s))
            
        dr = [dig_range(x) for x in nums]
        mx = max(dr)
        return sum(x for x,y in zip(nums, dr) if y == mx)
```