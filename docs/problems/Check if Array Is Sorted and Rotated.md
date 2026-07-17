---
date: 2025-02-03
difficulty: Easy
num: 1752
related_topics:
  - Array
return: Done
---

# Problem: 1752. Check If Array Is Sorted And Rotated

## Description

## Approach / Thoughts
brute force

## Solution
```python
class Solution:
    def check(self, nums: List[int]) -> bool:
        n = len(nums)

        def rotate(pos):
            B = [-1] * n
            for i in range(n):
                B[(i+pos) % n] = nums[i]
            return B == sorted(B)

        return any(rotate(i) for i in range(n))
```
