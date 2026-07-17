---
date: 2024-02-14
difficulty: Medium
num: 2971
related_topics:
  - Array
  - Greedy
  - Prefix Sum
  - Sorting
return: Done
---

# Problem: 2971. Find Polygon With The Largest Perimeter

## Description
Same as title

## Approach / Thoughts
Use greedy approach sort the array

Iterate from the back, if it is valid, return the sum, else throw away that value

## Solution
```python
class Solution:
    def largestPerimeter(self, nums: List[int]) -> int:
        nums.sort()
        total = sum(nums)

        for i in range(len(nums)-1,-1,-1):
            if nums[i] >= total - nums[i]:
                total -= nums[i] 
            else:
                return total
        return -1
```
