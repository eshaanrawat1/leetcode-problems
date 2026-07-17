---
date: 2026-05-28
difficulty: Easy
num: 3300
related_topics:
  - Array
  - Math
return:
---

# Problem: 3300. Minimum Element After Replacement With Digit Sum

## Description
You are given an integer array `nums`.

You replace each element in `nums` with the **sum** of its digits.

Return the **minimum** element in `nums` after all replacements.

## Approach / Thoughts
simple

## Solution
```python
class Solution:
    def minElement(self, nums: List[int]) -> int:
        ds = lambda d: sum(int(c) for c in str(d))
        return min((ds(x) for x in nums))
```