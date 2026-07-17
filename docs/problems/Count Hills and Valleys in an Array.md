---
date: 2025-07-27
difficulty: Easy
num: 2210
related_topics:
  - Array
return: Done
---

# Problem: 2210. Count Hills And Valleys In An Array

## Description

## Approach / Thoughts
get rid of adjacent duplicates with stack

## Solution
```python
class Solution:
    def countHillValley(self, nums: List[int]) -> int:
        stack = []
        for n in nums:
            if stack and stack[-1] == n:
                continue
            stack.append(n)

        N = len(stack)
        res = 0

        for i in range(1, N-1):
            prv = stack[i-1]
            nxt = stack[i+1]

            if prv < stack[i] and stack[i] > nxt:
                res += 1
            if prv > stack[i] and stack[i] < nxt:
                res += 1 
        return res
```
