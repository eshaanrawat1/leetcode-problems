---
date: 2024-03-31
difficulty: Medium
num: 540
related_topics:
  - Array
  - Binary Search
return: Done
---

# Problem: 540. Single Element In Sorted Array

## Description
Find single element in sorted array

## Approach / Thoughts
Look at positions. First occurrence is even, second is odd position, single number changes that

## Solution
```python
class Solution:
    def singleNonDuplicate(self, nums: List[int]) -> int:
        left, right = 0, len(nums)-1

        while left <= right:
            mid = (left + right) // 2

            if mid != 0 and mid != len(nums)-1:
                if nums[mid-1] != nums[mid] and nums[mid+1] != nums[mid]:
                    return nums[mid]
                elif nums[mid-1] != nums[mid] and mid % 2 == 1:
                    right = mid-1
                elif nums[mid-1] == nums[mid] and mid % 2 == 0:
                    right = mid-1
                else:
                    left = mid+1
            else:
                return nums[mid]
```
