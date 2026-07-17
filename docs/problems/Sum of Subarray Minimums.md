---
date: 2025-09-30
difficulty: Medium
num: 907
related_topics:
  - Array
  - Dynamic Programming
  - Monotonic Stack
  - Stack
return: Done
---

# Problem: 907. Sum Of Subarray Minimums

## Description
same, sum of all min elements of all subarrays

## Approach / Thoughts
extend left and right using mono stack. we keep mono inc stack because if a element is smaller, that is the new candidate min, all prev elements cannot go right and be included in those subarrays

left*right is how far left and how far right we go and those are all possible starts and ends, so multiply

## Solution
```python
class Solution:
    def sumSubarrayMins(self, arr: List[int]) -> int:
    
        MOD = pow(10, 9) + 7
        n = len(arr)
        res = 0

        stack = []
        for idx, num in enumerate(arr):
            while stack and num < stack[-1][1]:
                pi, pn = stack.pop()

                right = (idx - pi)
                left = (pi - stack[-1][0]) if stack else pi+1
                res += (right * left * pn) % MOD

            stack.append((idx, num))
            
        while stack:
            pi, pn = stack.pop()
            right = (n - pi)
            left = (pi - stack[-1][0]) if stack else pi+1
            res += (right * left * pn) % MOD

        return res % MOD
```
