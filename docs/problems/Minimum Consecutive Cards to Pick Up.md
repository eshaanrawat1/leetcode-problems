---
date: 2024-08-16
difficulty: Medium
num: 2260
related_topics:
  - Array
  - Hash Table
  - Sliding Window
return: Done
---

# Problem: 2260. Minimum Consecutive Cards To Pick Up

## Description

## Approach / Thoughts
dict, find min diff between same elements, update as we go

## Solution
```python
class Solution:
    def minimumCardPickup(self, cards: List[int]) -> int:
        d = {}
        
        diff = float("inf")
        for i, c in enumerate(cards):
            if c in d:
                diff = min(diff, i-d[c])
            d[c] = i
        return diff+1 if diff != float("inf") else -1
```
