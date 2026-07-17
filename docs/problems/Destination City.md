---
date: 2024-02-22
difficulty: Easy
num: 1436
related_topics:
  - Array
  - Hash Table
  - String
return: Done
---

# Problem: 1436. Destination City

## Description
Find destination city

## Approach / Thoughts
Check all cities arrived and left, store in set

In destination set, if it doesn’t go anywhere, add to it.

## Solution
```python
class Solution:
    def destCity(self, paths: List[List[str]]) -> str:
        leaving = set()
        destinations = set()

        for p in paths:
            leaving.add(p[0])
            destinations.add(p[1])
        
        for d in destinations:
            if d not in leaving:
                return d
        return ""
        
```
