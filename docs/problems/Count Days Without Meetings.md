---
date: 2024-06-01
difficulty: Medium
num: 3169
related_topics:
  - Array
  - Sorting
return: Done
---

# Problem: 3169. Count Days Without Meetings

## Description
count days

## Approach / Thoughts
intervals problem, subtract remaining days

## Solution
```python
class Solution:
    def countDays(self, days: int, meetings: List[List[int]]) -> int:
        meetings.sort(key=lambda x: x[0])

        stack = []
        for start, end in meetings:
            if stack and start <= stack[-1][-1]:
                stack[-1][-1] = max(stack[-1][-1], end)
                continue
            stack.append([start, end])

        remaining = days
        for start, end in stack:
            remaining -= (end - start + 1)
        return remaining
```
