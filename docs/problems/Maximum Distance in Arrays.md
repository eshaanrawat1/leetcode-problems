---
date: 2024-08-16
difficulty: Medium
num: 624
related_topics:
  - Array
  - Greedy
return: Done
---

# Problem: 624. Maximum Distance In Arrays

## Description
find max distance in 2 diff array

## Approach / Thoughts
choose max distance, if in same array check both other options

## Solution
```python
class Solution:
    def maxDistance(self, arrays: List[List[int]]) -> int:
        cur_min, cur_max = 1e9, -1e9
        max_idx = min_idx = None

        for i, b in enumerate(arrays):
            for n in b:
                if n < cur_min:
                    cur_min = n
                    min_idx = i
                
                if n > cur_max:
                    cur_max = n
                    max_idx = i

        if min_idx != max_idx:
            return abs(cur_min - cur_max)

        # check new min
        new_min = 1e9
        for i, b in enumerate(arrays):
            if i == min_idx:
                continue

            for n in b:
                new_min = min(new_min, n)

        # check new max
        new_max = -1e9
        for i, b in enumerate(arrays):
            if i == max_idx:
                continue

            for n in b:
                new_max = max(new_max, n)
        
        return max(
            abs(new_min - cur_max),
            abs(cur_min - new_max)
        )
```
