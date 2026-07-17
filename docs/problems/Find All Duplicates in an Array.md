---
date: 2024-03-24
difficulty: Medium
num: 442
related_topics:
  - Array
  - Hash Table
return: Done
---

# Problem: 442. Find All Duplicates In An Array

## Description

## Approach / Thoughts
Hashset

## Solution
```python
class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        res = []
        visited = set()

        for x in nums:
            if x in visited:
                res.append(x)
            visited.add(x)
        return res
```
