---
date: 2023-12-21
difficulty: Easy
num: 1913
related_topics:
  - Array
  - Sorting
return: Done
---

# Problem: 1913. Maximum Product Difference Between Two Pairs

## Description
As title

## Approach / Thoughts
Sort array return last indices product minus first indices product.

## Solution
```python
class Solution:
    def maxProductDifference(self, nums: List[int]) -> int:
        nums.sort()
        
        return (nums[-1] * nums[-2]) - (nums[0] * nums[1])
```
