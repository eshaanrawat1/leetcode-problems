---
date: 2025-03-28
difficulty: Medium
num: 2602
related_topics:
  - Array
  - Binary Search
  - Prefix Sum
  - Sorting
return: Done
---

# Problem: 2602. Minimum Operations To Make All Array Elements Equal

## Description
same, can inc or dec numbers by num, min operations to make all elements of num equal to query

## Approach / Thoughts
sort, get prefix sums - formula for all numbers to right and left

use binary search to find pos, edge case of pos = 0

## Solution
```python
class Solution:
    def minOperations(self, nums: List[int], queries: List[int]) -> List[int]:
        n = len(nums)
        nums.sort()

        ps = nums[:]
        for i in range(1, n):
            ps[i] += ps[i-1]

        res = []
        for q in queries:
            pos = bisect.bisect_left(nums, q)
            
            num_right = n - pos
            num_left = pos

            if pos > 0:
                rops = (ps[-1] - ps[pos-1]) - (q * num_right)
                lops = abs(ps[pos-1] - (q * num_left))
                val = rops + lops
            else:
                rops = ps[-1] - (q * num_right)
                val = rops
            
            res.append(val)
        
        return res
```
