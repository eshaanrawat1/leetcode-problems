---
date: 2024-07-22
difficulty: Easy
num: 2418
related_topics:
  - Array
  - Hash Table
  - Sorting
  - String
return: Done
---

# Problem: 2418. Sort The People

## Description

## Approach / Thoughts
match names and people, sort

## Solution
```python
class Solution:
    def sortPeople(self, names: List[str], heights: List[int]) -> List[str]:
        pairs = [[heights[i], names[i]] for i in range(len(names))]
        return [i[-1] for i in sorted(pairs)][::-1]
```
