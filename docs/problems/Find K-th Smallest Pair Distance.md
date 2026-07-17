---
date: 2024-08-05
difficulty: Hard
num: 719
related_topics:
  - Array
  - Binary Search
  - Sorting
  - Two-Pointer
return: Review
---

# Problem: 719. Find K Th Smallest Pair Distance

## Description

## Approach / Thoughts
binary search to find N where there are valid guesses

## Solution
```python
class Solution:
    def smallestDistancePair(self, nums: List[int], k: int) -> int:
        def feasible(guess):
            j = 1
            i = count = 0

            while i < len(nums):
                while (j < len(nums)) and (nums[j] - nums[i] <= guess):
                    j += 1
                count += j - i - 1
                i += 1
            return count >= k

        nums.sort()

        res = None
        l, r = 0, nums[-1] - nums[0]

        while l <= r:
            m = (l + r) // 2
            if feasible(m):
                res = m
                r = m - 1
            else:
                l = m + 1
        return res            
```
