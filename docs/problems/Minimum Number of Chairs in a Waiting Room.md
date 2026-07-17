---
date: 2024-06-01
difficulty: Easy
num: 3168
related_topics:
  - Simulation
  - String
return: Done
---

# Problem: 3168. Minimum Number Of Chairs In A Waiting Room

## Description
simulate chairs

## Approach / Thoughts
max chairs needed at any time

## Solution
```python
class Solution:
    def minimumChairs(self, s: str) -> int:
        total = cnt = 0
        for ch in s:
            if ch == 'E': cnt += 1
            if ch == 'L': cnt -= 1
            total = max(total, cnt)
        return total
```
