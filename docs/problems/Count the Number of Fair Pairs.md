---
date: 2024-11-13
difficulty: Medium
num: 2563
related_topics:
  - Array
  - Binary Search
  - Sorting
  - Two-Pointer
return: Done
---

# Problem: 2563. Count The Number Of Fair Pairs

## Description
pairs sum in range

## Approach / Thoughts
same sliding window at least trick

two pointers

## Solution
```python
class Solution:
    def countFairPairs(self, nums: List[int], lower: int, upper: int) -> int:
        nums.sort()

        def countLess(val):
            total, j = 0, len(nums) - 1
            for i in range(len(nums)):
                while i < j and nums[i] + nums[j] > val:
                    j -= 1
                total += max(0, j - i)
            return total
        return countLess(upper) - countLess(lower-1)
```
