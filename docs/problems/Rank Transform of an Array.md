---
date: 2024-10-01
difficulty: Easy
num: 1331
related_topics:
  - Array
  - Hash Table
  - Sorting
return: Done
---

# Problem: 1331. Rank Transform Of An Array

## Description

## Approach / Thoughts
sort unique, map rank to number

## Solution
```python
class Solution:
    def arrayRankTransform(self, arr: List[int]) -> List[int]:
        unique = sorted(list(set(arr)))
        ranks = {n: i+1 for i,n in enumerate(unique)}

        return [ranks[n] for n in arr]
```
