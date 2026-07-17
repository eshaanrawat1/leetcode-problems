---
date: 2024-01-30
difficulty: Medium
num: 739
related_topics:
  - Array
  - Monotonic Stack
  - Stack
return: Done
---

# Problem: 739. Daily Temperatures

## Description
Given a list of temperatures, find the number of days it takes to reach a warmer temperature

## Approach / Thoughts
Create stack and output arrays

Iterate through the list and add temperatures to the stack and index

If temp is greater than last element in the stack, pop it and add the difference index to the result array

Use while loop for that

## Solution
```python
class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        res = [0] * len(temperatures)
        stack = []

        for i, t in enumerate(temperatures):
            while stack and t > stack[-1][-1]:
                idx, curr_temp = stack.pop()
                res[idx] = (i - idx)
            stack.append([i, t])
        return res
```
