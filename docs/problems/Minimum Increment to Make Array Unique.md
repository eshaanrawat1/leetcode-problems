---
date: 2024-06-13
difficulty: Medium
num: 945
related_topics:
  - Array
  - Counting
  - Greedy
  - Sorting
return: Done
---

# Problem: 945. Minimum Increment To Make Array Unique

## Description

## Approach / Thoughts
sort and find difference needed to make unique

## Solution
```python
class Solution:
    def minIncrementForUnique(self, nums: List[int]) -> int:
        nums.sort()
        visited = {nums[0]}

        increments = 0
        for i in range(1, len(nums)):
            if nums[i] in visited:
                tmp = nums[i]
                nums[i] = nums[i-1] + 1
                increments += (nums[i] - tmp)
            visited.add(nums[i])
        return increments
```
