---
date: 2025-05-03
difficulty: Easy
num: 1128
related_topics:
  - Array
  - Counting
  - Hash Table
return: Done
---

# Problem: 1128. Number Of Equivalent Domino Pairs

## Description
same, but rotations allows - (1,4) = (4,1)

## Approach / Thoughts
get sorted pairs, store count

use counting pairs formula for each value

## Solution
```python
class Solution:
    def numEquivDominoPairs(self, dominoes: List[List[int]]) -> int:
        cnt = Counter()
        for x, y in dominoes:
            min_val = min(x, y)
            max_val = max(x, y)
            cnt[(min_val, max_val)] += 1
        return sum((c * (c-1) // 2) for c in cnt.values())
```
