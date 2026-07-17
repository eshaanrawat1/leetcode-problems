---
date: 2025-12-15
difficulty: Medium
num: 2110
related_topics:
  - Array
  - Dynamic Programming
  - Math
return: Done
---

# Problem: 2110. Number Of Smooth Descent Periods Of A Stock

## Description

## Approach / Thoughts
inc len of stack

## Solution
```python
class Solution:
    def getDescentPeriods(self, prices: List[int]) -> int:
        res = 0

        stack = []
        for p in prices:
            if stack and p+1 != stack[-1]:
                stack = []
            stack.append(p)
            res += len(stack)
        return res
```
