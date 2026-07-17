---
date: 2024-08-02
difficulty: Medium
num: 1344
related_topics:
  - Math
return: Done
---

# Problem: 1344. Angle Between Hands Of A Clock

## Description

## Approach / Thoughts
find angle of hour and angle of minute

find abs diff between them and check complement

## Solution
```python
class Solution:
    def angleClock(self, hour: int, minutes: int) -> float:
        hours_place = 30 * hour + minutes / 2
        mins_place = 6 * minutes

        diff = abs(hours_place - mins_place)
        return diff if diff <= 180 else 360 - diff
```
