---
date: 2025-06-09
difficulty: Easy
num: 3442
related_topics:
  - Counting
  - Hash Table
  - String
return: Done
---

# Problem: 3442. Maximum Difference Between Even And Odd Frequency I

## Description

## Approach / Thoughts
count max odd and min even frequencies

## Solution
```python
class Solution:
    def maxDifference(self, s: str) -> int:
        cnt = Counter(s)

        max_odd = -inf
        min_even = inf

        for v in cnt.values():
            if v % 2 == 0:
                min_even = min(min_even, v)
            else:
                max_odd = max(max_odd, v)    
        return max_odd - min_even
```
