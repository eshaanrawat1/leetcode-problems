---
date: 2024-05-07
difficulty: Medium
num: 56
related_topics:
  - Array
  - Sorting
return: Done
---

# Problem: 56. Merge Intervals

## Description
merge intervals

## Approach / Thoughts
sort and keep track in stack

## Solution
```python
class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort(key=lambda x:x[0])
        
        stack = []
        for start, end in intervals:
            if stack and start <= stack[-1][-1]:
                stack[-1][-1] = max(stack[-1][-1], end)
            else:
                stack.append([start, end])
        return stack
```
