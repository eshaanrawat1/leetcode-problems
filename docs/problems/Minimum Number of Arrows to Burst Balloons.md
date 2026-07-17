---
date: 2024-06-11
difficulty: Medium
num: 452
related_topics:
  - Array
  - Greedy
  - Sorting
return: Done
---

# Problem: 452. Minimum Number Of Arrows To Burst Balloons

## Description
pop balloons

## Approach / Thoughts
take greatest common intervals

## Solution
```python
class Solution:
    def findMinArrowShots(self, points: List[List[int]]) -> int:
        points.sort(key=lambda x: x[0])

        stack = []
        for start, end in points:
            if stack and stack[-1][-1] >= start:
                stack[-1][0] = min(stack[-1][0], start)
                stack[-1][-1] = min(stack[-1][-1], end)
                continue
            stack.append([start, end])
        return len(stack)
```
