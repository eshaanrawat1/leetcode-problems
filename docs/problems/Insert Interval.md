---
date: 2024-05-07
difficulty: Medium
num: 57
related_topics:
  - Array
return: Done
---

# Problem: 57. Insert Interval

## Description
insert interval and merge

## Approach / Thoughts
insert then merge two pass

## Solution
```python
class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        # insert interval
        original_len = len(intervals)
        for i in range(original_len):
            start, end = intervals[i]

            if newInterval[0] < start:
                intervals = intervals[:i] + [newInterval] + intervals[i:]
                break
    
        if len(intervals) == original_len:
            intervals.append(newInterval)

        
        # merge interval
        stack = []
        for start, end in intervals:
            if stack and start <= stack[-1][-1]:
                stack[-1][-1] = max(stack[-1][-1], end)
            else:
                stack.append([start, end])
        return stack
```
