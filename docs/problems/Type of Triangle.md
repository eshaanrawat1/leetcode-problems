---
date: 2025-05-18
difficulty: Easy
num: 3024
related_topics:
  - Array
  - Math
  - Sorting
return: Done
---

# Problem: 3024. Type Of Triangle

## Description

## Approach / Thoughts
check each case, handle not possible triangle

## Solution
```python
class Solution:
    def triangleType(self, nums: List[int]) -> str:
        s1, s2, s3 = nums

        if not ((s1 + s2 > s3) and (s2 + s3 > s1) and (s1 + s3 > s2)):
            return 'none'

        if s1 == s2 and s2 == s3:
            return 'equilateral'

        if (s1 == s2) or (s2 == s3) or (s1 == s3):
            return 'isosceles'

        return 'scalene'
```
