---
date: 2023-12-20
difficulty: Easy
num: 35
related_topics:
  - Array
  - Binary Search
return: Done
---

# Problem: 35. Search Insert Position

## Description
Find insert position in sorted array

## Approach / Thoughts
Use binary search to find if in otherwise return where it would have been inserted

## Solution
```python
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums) - 1

        while left <= right:
            mid = (left + right) // 2

            if nums[mid] == target:
                return mid 
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1

        return left
```
