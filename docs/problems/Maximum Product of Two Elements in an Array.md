---
date: 2023-12-11
difficulty: Easy
num: 1464
related_topics:
  - Array
  - Heap (Priority Queue)
  - Sorting
return: Done
---

# Problem: 1464. Maximum Product Of Two Elements In An Array

## Description
Find the max product pair in an array.

## Approach / Thoughts
First was to sort and return product of last two elements

Second was to find first max, and store the index in set, then find the second max and return product

## Solution
```python
class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        nums.sort()
        return (nums[-1] - 1) * (nums[-2] - 1)
```
