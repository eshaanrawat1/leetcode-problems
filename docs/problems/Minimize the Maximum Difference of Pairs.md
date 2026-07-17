---
date: 2024-07-02
difficulty: Medium
num: 2616
related_topics:
  - Array
  - Binary Search
  - Greedy
return: Done
---

# Problem: 2616. Minimize The Maximum Difference Of Pairs

## Description

## Approach / Thoughts
sort, choose adjacent pairs that are less than threshold

keep reducing threshold with binary search

## Solution
```python
class Solution:
    def minimizeMax(self, nums: List[int], p: int) -> int:
        nums.sort()
        def pair(threshold):
            count = 0
            index = 1
            while index < len(nums):
                if nums[index] - nums[index-1] <= threshold:
                    count += 1
                    index += 1
                index += 1
            
            if count >= p:
                return True
            return False

        left, right = 0, nums[-1] - nums[0]
        while left < right:
            mid = (left + right) // 2
            if pair(mid):
                right = mid
            else:
                left = mid + 1
        return left
```
