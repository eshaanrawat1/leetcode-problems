---
date: 2025-10-14
difficulty: Medium
num: 1353
related_topics:
  - Array
  - Greedy
  - Heap (Priority Queue)
  - Sorting
return: Done
---

# Problem: 1353. Maximum Number Of Events That Can Be Attended

## Description

## Approach / Thoughts
sort greedy by end time, assign to first available slot, use binary search on available days

## Solution
```python
from sortedcontainers import SortedSet

class Solution:
    def maxEvents(self, events: List[List[int]]) -> int:
        max_day = max(max(x, y) for x, y in events)
        days = SortedSet(list(range(1, max_day+1)))

        events.sort(key=lambda x: x[1])
        N = len(events)

        res = 0
        for start, end in events:
            start_pos = days.bisect_left(start)
            end_pos = days.bisect_left(end)

            # no days left
            if not days:
                return res

            # before first day
            if end < days[0]:
                continue

            # after last day
            if start > days[-1]:
                continue

            # only 1 time 
            if start == end and start not in days:
                continue
            elif start == end:
                days.discard(start)
                res += 1
                continue

            if start_pos == end_pos and (days[start_pos] < start or days[end_pos] > end):
                continue

            # range of times
            days.discard(days[start_pos])
            res += 1

        return res
```
