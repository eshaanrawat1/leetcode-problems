---
date: 2025-03-11
difficulty: Easy
num: 2529
related_topics:
  - Array
  - Binary Search
  - Counting
return: Done
---

# Problem: 2529. Maximum Count Of Positive Integer And Negative Integer

## Description

## Approach / Thoughts
brute force count

## Solution
```python
class Solution:
    def maximumCount(self, nums: List[int]) -> int:
        sign = [0, 0]
        for n in nums:
            if n > 0:
                sign[0] += 1
            if n < 0:
                sign[1] += 1
        return max(sign)
```
