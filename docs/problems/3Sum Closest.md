---
date: 2023-12-15
difficulty: Medium
num: 16
related_topics:
  - Array
  - Sorting
  - Two-Pointer
return: Done
---

# Problem: 16. 3Sum Closest

## Description
Same as 3Sum but find closest triplet to target number

## Approach / Thoughts
1. Sort the array

1. Use for loop and nested while loop

1. Set up two pointers

1. Check if absolute distance is smaller, replace variable to hold smallest distance - variable now holds the target sum

## Solution
```python
class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        current_dist = None
        nums.sort()

        for i in range(len(nums)):
            left = i + 1
            right = len(nums) - 1

            while left < right:
                current_sum = nums[i] + nums[left] + nums[right]

                if current_sum == target:
                    return current_sum
                elif current_sum < target:
                    left += 1
                else:
                    right -= 1

                if current_dist == None or abs(current_sum - target) < abs(current_dist - target):
                    current_dist = current_sum
        
        return current_dist
```
