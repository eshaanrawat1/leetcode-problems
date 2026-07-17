---
date: 2024-09-14
difficulty: Hard
num: 354
related_topics:
  - Array
  - Binary Search
  - Dynamic Programming
  - Sorting
return: Review
---

# Problem: 354. Russian Doll Envelopes

## Description

## Approach / Thoughts
sort by x inc and y dec

use lis nlgn

ex - 1,2 3,4 3,3 5,6

we want to include bigger y first so we don’t double include the same x

maintain our subsequence

## Solution
```python
class Solution:
    def maxEnvelopes(self, envelopes: List[List[int]]) -> int:
        envelopes.sort(key=lambda x:(x[0], -x[1]))

        sub = []

        for x, y in envelopes:
            if not sub or sub[-1] < y:
                sub.append(y)
            else:
                idx = bisect_left(sub, y)
                sub[idx] = y
        return len(sub)
```
