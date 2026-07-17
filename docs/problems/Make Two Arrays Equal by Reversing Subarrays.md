---
date: 2024-08-02
difficulty: Easy
num: 1460
related_topics:
  - Array
  - Hash Table
  - Sorting
return: Done
---

# Problem: 1460. Make Two Arrays Equal By Reversing Subarrays

## Description
return true if possible

## Approach / Thoughts
find missing numbers

## Solution
```python
class Solution:
    def canBeEqual(self, target: List[int], arr: List[int]) -> bool:
        c1 = Counter(target)
        c2 = Counter(arr)

        for n in target + arr:
            if c1[n] != c2[n]:
                return False
        return True
```
