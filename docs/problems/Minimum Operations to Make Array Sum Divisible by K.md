---
date: 2025-11-29
difficulty: Easy
num: 3512
related_topics:
  - Array
  - Math
return: Done
---

# Problem: 3512. Minimum Operations To Make Array Sum Divisible By K

## Description

## Approach / Thoughts
can only decrease sum

## Solution
```python
class Solution:
    def minOperations(self, nums: List[int], k: int) -> int:
        return sum(nums) % k
```
