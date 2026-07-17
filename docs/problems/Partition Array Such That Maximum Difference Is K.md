---
date: 2025-06-18
difficulty: Medium
num: 2294
related_topics:
  - Array
  - Greedy
  - Sorting
return: Done
---

# Problem: 2294. Partition Array Such That Maximum Difference Is K

## Description
same, making groups of numbers where max difference between any two numbers is k

## Approach / Thoughts
sort and reset when difference gets too high

## Solution
```python
class Solution:
    def partitionArray(self, nums: List[int], k: int) -> int:
        nums.sort()
        splits = 0

        i, n = 0, len(nums)
        while i < n:
            cur = nums[i]
            j = i

            while j < n and nums[j] - nums[i] <= k:
                j += 1
            splits += 1
            i = j
        return splits
```
