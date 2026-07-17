---
date: 2026-06-15
difficulty: Medium
num: 3961
related_topics:
  - 
return:
---

# Problem: 3961. Maximize Sum of Device Ratings

## Description
You are given a 2D integer array `units` of size `m × n` where `units[i][j]` represents the capacity of the `jth` unit in the `ith` device. Each device contains **exactly** `n` units.

The **rating** of a device is the **minimum** capacity among all its units.

You may perform the following operation any number of times (including zero):

	- Choose a device `i` that has **not been** used as a source before.

	- Remove **exactly** one unit from device `i` and add it to **any** different device.

	- Then mark device `i` as used, so it cannot be chosen again as a source.

Return the **maximum** possible sum of the ratings of all devices after any number of such operations.

**Note:**

	- Devices can receive units from multiple devices, regardless of whether they have been selected.

	- The rating of an empty device is 0.

## Approach / Thoughts
[[Weekly Contest 506]]

each device contributes it's minimum rating. iterate over every rating and move everything else to the global minimum - each device now contributes its second minimum values. handle every single value separately

works because mxn is fixed for single array do no swaps

## Solution
```python
class Solution:
    def maxRatings(self, units: List[List[int]]) -> int:
        res = 0
        
        swaps = []
        for u in units:
            if len(u) == 1:
                res += u[0]
            else:
                swaps.append(sorted(u))

        swaps.sort(key = lambda x: x[1])
        n = len(swaps)
        
        for i in range(n-1, -1, -1):
            if i == 0:
                res += min(swaps[0])
                continue

            swaps[0].append(swaps[i][0])
            res += swaps[i][1]
        return res
```