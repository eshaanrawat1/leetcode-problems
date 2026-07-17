---
date: 2023-12-12
difficulty: Easy
num: 1287
related_topics:
  - Array
return: Done
---

# Problem: 1287. Element Appearing More Than 25% In Sorted Array

## Description
Same as title

## Approach / Thoughts
Use one pass to count freq of element

## Solution
```python
class Solution:
    def findSpecialInteger(self, arr: List[int]) -> int:
        pl, count = None, 0
        N = len(arr) / 4

        for num in arr:
            if pl is None:
                pl = num
                count += 1
            elif pl == num:
                count += 1
            else:
                pl = num
                count = 1

            if count > N:
                return pl
        return -1
```
