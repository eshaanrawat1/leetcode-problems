---
date: 2024-09-26
difficulty: Hard
num: 1326
related_topics:
  - Array
  - Dynamic Programming
  - Greedy
return: Done
---

# Problem: 1326. Minimum Number Of Taps To Open To Water A Garden

## Description
same, min intervals to cover range

## Approach / Thoughts
make intervals and sort

greedy chain based on longest length

## Solution
```python
class Solution:
    def minTaps(self, n: int, ranges: List[int]) -> int:
        taps = []
        for i, val in enumerate(ranges):
            if val == 0:
                continue

            start = max(i - val, 0)
            end = min(i + val, n)
            
            taps.append([start, end])

        if not taps:
            return -1

        taps.sort()

        i = max_reach = cnt = 0
        while max_reach < n:
            current_reach = 0

            while i < len(taps) and taps[i][0] <= max_reach:
                current_reach = max(current_reach, taps[i][1])
                i += 1
            
            if current_reach == 0:
                return -1

            max_reach = current_reach
            cnt += 1
        
        return cnt
```
