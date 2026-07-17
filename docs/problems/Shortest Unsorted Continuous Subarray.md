---
date: 2025-10-06
difficulty: Medium
num: 581
related_topics:
  - Array
  - Greedy
  - Monotonic Stack
  - Sorting
  - Stack
  - Two-Pointer
return: Done
---

# Problem: 581. Shortest Unsorted Continuous Subarray

## Description

## Approach / Thoughts
sort array and compare sorted nums to unsorted, first on left and right side, everything else in between has to be sorted

## Solution
```python
class Solution:
    def findUnsortedSubarray(self, nums: List[int]) -> int:
        snums = sorted(nums)

        l, r = 0, len(nums)-1
        while l < r:
            flag = False

            if nums[l] == snums[l]:
                l += 1
                flag = True

            if nums[r] == snums[r]:
                r -= 1
                flag = True

            if not flag:
                break

        if l >= r:
            return 0
        return r - l + 1
```
