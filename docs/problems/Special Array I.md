---
date: 2025-01-31
difficulty: Easy
num: 3151
related_topics:
  - Array
return: Done
---

# Problem: 3151. Special Array I

## Description
same - different adjacent parities

## Approach / Thoughts
iterate adjacent

## Solution
```python
class Solution:
    def isArraySpecial(self, nums: List[int]) -> bool:
        n = len(nums)
        for i in range(1, n):
            if nums[i] % 2 == nums[i-1] % 2:
                return False
        return True
```
