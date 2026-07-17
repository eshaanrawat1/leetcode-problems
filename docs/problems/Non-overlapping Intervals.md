---
date: 2024-06-11
difficulty: Medium
num: 435
related_topics:
  - Array
  - Dynamic Programming
  - Greedy
  - Sorting
return: Done
---

# Problem: 435. Non Overlapping Intervals

## Description
find min interval to remove to make them non-overlapping

## Approach / Thoughts
sort and take least interval after merging

## Solution
```python
class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort(key=lambda x: x[0])

        stack = []
        to_remove = 0
        for start, end in intervals:
            if stack and stack[-1][-1] > start:
                stack[-1][-1] = min(stack[-1][-1], end)
                to_remove += 1
            else:
                stack.append([start, end])
        return to_remove
```
