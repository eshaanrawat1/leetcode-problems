---
date: 2024-10-09
difficulty: Medium
num: 962
related_topics:
  - Array
  - Monotonic Stack
  - Stack
return: Review
---

# Problem: 962. Maximum Width Ramp

## Description

## Approach / Thoughts
sort indices in a way to get min index so far, since all ramps are sorted

## Solution
```python
class Solution:
    def maxWidthRamp(self, nums: List[int]) -> int:
        indices = list(range(len(nums)))
        indices.sort(key = lambda x: nums[x])

        min_index = float("inf")
        max_ramp = 0

        for i in indices:
            max_ramp = max(max_ramp, i - min_index)
            min_index = min(min_index, i)

        return max_ramp
```
