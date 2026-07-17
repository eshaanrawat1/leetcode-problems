---
date: 2024-09-15
difficulty: Medium
num: 539
related_topics:
  - Array
  - Math
  - Sorting
  - String
return: Done
---

# Problem: 539. Minimum Time Difference

## Description

## Approach / Thoughts
difference between days normally

add 12 to days < 12 to account for cycles

## Solution
```python
from datetime import datetime

class Solution:
    def findMinDifference(self, timePoints: List[str]) -> int:
        times = [datetime.strptime(t, "%H:%M") for t in timePoints]
        times.sort()

        min_diff = 1e9
        for i in range(1, len(times)):
            time_diff = (times[i] - times[i-1]).total_seconds() / 60
            anti_diff = (times[i] - times[i-1]).total_seconds() / 60
            min_diff = min(min_diff, time_diff)
        
        for i in range(len(times)):
            if times[i] < datetime.strptime("12:00", "%H:%M"):
                times[i] += timedelta(days=1)

        times.sort()
        for i in range(1, len(times)):
            time_diff = (times[i] - times[i-1]).total_seconds() / 60
            anti_diff = (times[i] - times[i-1]).total_seconds() / 60
            min_diff = min(min_diff, time_diff)
        return int(min_diff)
```
