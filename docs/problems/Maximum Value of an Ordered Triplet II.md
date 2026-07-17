---
date: 2025-04-02
difficulty: Medium
num: 2874
related_topics:
  - Array
return: Done
---

# Problem: 2874. Maximum Value Of An Ordered Triplet Ii

## Description
same as 2873, harder constraints

## Approach / Thoughts
find max right, pick up max and min as we go

## Solution
```python
class Solution:
    def maximumTripletValue(self, nums: List[int]) -> int:
        n = len(nums)
        res = 0

        max_to_right = [-inf] * n
        for i in range(n-2, -1, -1):
            max_to_right[i] = max(nums[i+1], max_to_right[i+1])

        cur_max = -inf
        cur_min = inf

        for i in range(n):
            if nums[i] > cur_max:
                cur_max = nums[i]
                cur_min = nums[i]
            cur_min = min(cur_min, nums[i])
            res = max(res, (cur_max - cur_min) * max_to_right[i])
        return res
```
