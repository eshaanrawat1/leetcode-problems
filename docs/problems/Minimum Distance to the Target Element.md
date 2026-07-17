---
date: 2024-06-17
difficulty: Easy
num: 1848
related_topics:
  - Array
return: Done
---

# Problem: 1848. Minimum Distance To The Target Element

## Description
find min distance of index with target element to start

## Approach / Thoughts
store index and do count

## Solution
```python
class Solution:
    def getMinDistance(self, nums: List[int], target: int, start: int) -> int:
        min_diff = float("inf")
        for i in range(len(nums)):
            if nums[i] == target:
                min_diff = min(min_diff, abs(i - start))
        return min_diff
```
