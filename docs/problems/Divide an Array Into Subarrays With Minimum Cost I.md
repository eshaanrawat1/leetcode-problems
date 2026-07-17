---
date: 2024-01-21
difficulty: Easy
num: 3010
related_topics:
  - Array
return: Done
---

# Problem: 3010. Divide An Array Into Subarrays With Minimum Cost I

## Description
Divide an array into 3 contiguous subarrays such that each leading value makes the minimum sum.

## Approach / Thoughts
Find the two minimum elements and add to the first element.

## Solution
```python
class Solution:
    def minimumCost(self, nums: List[int]) -> int:
        ls = nums[1:]
        heapq.heapify(ls)

        return nums[0] + heapq.heappop(ls) + heapq.heappop(ls)
```
