---
date: 2024-06-25
difficulty: Medium
num: 503
related_topics:
  - Array
  - Monotonic Stack
  - Stack
return: Review
---

# Problem: 503. Next Greater Element Ii

## Description
same but circular

## Approach / Thoughts
use monotonic stack to keep track of greater elements to the right, pop and readd

## Solution
```python
class Solution:
    def nextGreaterElements(self, nums: List[int]) -> List[int]:
        N = len(nums)
        stack, res = [], [-1] * N

        for i in range(N-1, -1, -1):
            stack.append(i)

        for i in range(N-1, -1, -1):
            while stack and nums[stack[-1]] <= nums[i]:
                stack.pop()
            
            if stack:
                res[i] = nums[stack[-1]]
            
            stack.append(i)

        return res
```
