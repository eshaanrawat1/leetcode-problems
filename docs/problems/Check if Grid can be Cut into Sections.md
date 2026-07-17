---
date: 2025-03-24
difficulty: Medium
num: 3394
related_topics:
  - Array
  - Sorting
return: Done
---

# Problem: 3394. Check If Grid Can Be Cut Into Sections

## Description

## Approach / Thoughts
check intervals horizontal and vertical, 2 split sections

## Solution
```python
class Solution:
    def checkValidCuts(self, n: int, rectangles: List[List[int]]) -> bool:
        horiz_intervals = [(p[0], p[2]) for p in rectangles]
        vert_intervals = [(p[1], p[3]) for p in rectangles]

        horiz_intervals.sort()
        vert_intervals.sort()

        def merge(interval):
            stack = []
            for s, e in interval:
                if stack and stack[-1][0] <= s < stack[-1][-1]:
                    stack[-1] = (stack[-1][0], max(e, stack[-1][-1]))
                    continue
                stack.append((s, e))
            return stack

        h = merge(horiz_intervals)
        v = merge(vert_intervals)

        return len(v) > 2 or len(h) > 2
```
