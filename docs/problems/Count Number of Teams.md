---
date: 2024-07-29
difficulty: Medium
num: 1395
related_topics:
  - Array
  - Binary Indexed Tree
  - Dynamic Programming
return: Done
---

# Problem: 1395. Count Number Of Teams

## Description

## Approach / Thoughts
for each index, find num lower to left, right and higer

use combinations to find all length three sequences

## Solution
```python
class Solution:
    def numTeams(self, rating: List[int]) -> int:
        res = 0
        for i in range(len(rating)):
            cur = rating[i]

            lo_l = lo_r = 0
            hi_l = hi_r = 0

            for j in range(i):
                if rating[j] < cur:
                    lo_l += 1
                if rating[j] > cur:
                    hi_l += 1

            for j in range(i+1, len(rating)):
                if rating[j] > cur:
                    hi_r += 1
                if rating[j] < cur:
                    lo_r += 1

            res += (lo_l * hi_r) + (lo_r * hi_l)
        return res
```
