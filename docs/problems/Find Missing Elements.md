---
date: 2025-11-04
difficulty: Easy
num: 3731
related_topics:
  - Array
return: Done
---

# Problem: 3731. Find Missing Elements

## Description

## Approach / Thoughts
find range and check in set

## Solution
```python
class Solution:
    def findMissingElements(self, nums: List[int]) -> List[int]:
        l = min(nums)
        r = max(nums)

        snums = set(nums)
        
        res = []
        for i in range(l, r+1):
            if i not in snums:
                res.append(i)
        return res
```
