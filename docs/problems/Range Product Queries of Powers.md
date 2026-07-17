---
date: 2025-08-10
difficulty: Medium
num: 2438
related_topics:
  - Array
  - Bit Manipulation
  - Prefix Sum
return: Done
---

# Problem: 2438. Range Product Queries Of Powers

## Description

## Approach / Thoughts
get set bits for sum to n and prefix sum for queries

## Solution
```python
class Solution:
    def productQueries(self, n: int, queries: List[List[int]]) -> List[int]:
        powers = [pow(2, i) for i in range(31) if (1 << i) & n]
        MOD = (10 ** 9 + 7)

        n = len(powers)
        for i in range(1, n):
            powers[i] *= powers[i-1]

        res = []
        for l, r in queries:
            if l == 0:
                res.append(powers[r] % MOD)
            else:
                res.append((powers[r] // powers[l-1]) % MOD)
        return res
```
