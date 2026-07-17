---
date: 2024-07-02
difficulty: Medium
num: 1509
related_topics:
  - Array
  - Greedy
  - Sorting
return: Done
---

# Problem: 1509. Minimum Difference Between Largest And Smallest Value In Three Moves

## Description
remove 3 values to minimize difference between largest and smallest

## Approach / Thoughts
sort and remove biggest / smallest 3 or biggest 2 smallest 1 or biggest 1 smallest 2, return min

## Solution
```python
class Solution:
    def minDifference(self, nums: List[int]) -> int:
        if len(nums) <= 4:
            return 0

        n = len(nums)
        nums.sort()
        return min(
            nums[-4] - nums[0],
            nums[-1] - nums[3],
            nums[-3] - nums[1],
            nums[-2] - nums[2]
        )
```
