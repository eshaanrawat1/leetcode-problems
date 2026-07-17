---
date: 2024-09-02
difficulty: Medium
num: 1288
related_topics:
  - Array
  - Sorting
return: Review
---

# Problem: 1288. Remove Covered Intervals

## Description

## Approach / Thoughts
sort by left desc and right asc

[[1,5], [1,4], [1,3]]

if cur right > right then increment 1, it is valid

otherwise it is covered since left is always covered in the range

## Solution
```python
class Solution:
    def removeCoveredIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort(key=lambda x: (x[0], -x[1]))

        res = r = 0
        for s, e in intervals:
            res += e > r
            r = max(r, e)
        return res
```
