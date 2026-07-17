---
date: 2025-04-08
difficulty: Easy
num: 3375
related_topics:
  - Array
  - Hash Table
return: Done
---

# Problem: 3375. Minimum Operations To Make Array Values Equal To K

## Description
same, can reduce values to next lowest number

## Approach / Thoughts
only fails if any number is < k

otherwise just get count of distinct numbers ≠ k

## Solution
```python
class Solution:
    def minOperations(self, nums: List[int], k: int) -> int:
        for n in nums:
            if n < k:
                return -1  
        return len(set(nums) - {k})
```
