---
date: 2025-09-19
difficulty: Hard
num: 1944
related_topics:
  - Array
  - Monotonic Stack
  - Stack
return: Done
---

# Problem: 1944. Number Of Visible People In A Queue

## Description

## Approach / Thoughts
use a decreasing mono stack. the idea is that if we have someone taller than the last entry in the stack, the last entry in the stack can definitely see them

then if right before adding the current person to the stack, the person previous to them can always see them, so we increment them +1

## Solution
```python
class Solution:
    def canSeePersonsCount(self, heights: List[int]) -> List[int]:
        stack = []
        res = [0] * len(heights)

        for i, h in enumerate(heights):
            while stack and h > stack[-1][1]:
                cur_idx, _ = stack.pop()
                res[cur_idx] += 1

            if stack:
                prev_idx = stack[-1][0]
                res[prev_idx] += 1

            stack.append((i, h))
        return res
```
