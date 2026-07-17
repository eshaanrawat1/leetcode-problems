---
date: 2025-04-06
difficulty: Medium
num: 1524
related_topics:
  - Array
  - Dynamic Programming
  - Math
  - Prefix Sum
return: Done
---

# Problem: 1524. Number Of Sub Arrays With Odd Sum

## Description

## Approach / Thoughts
prefix sum, track number of prev prefixes with opposite parity

## Solution
```python
class Solution:
    def numOfSubarrays(self, arr: List[int]) -> int:
        ps = arr[:]
        seen = Counter()

        n = len(arr)
        for i in range(1, n):
            ps[i] += ps[i-1]

        res = 0
        for x in ps:
            parity = x % 2
            res += seen[1 - parity] + parity
            seen[parity] += 1
        return res % (10 ** 9 + 7)
```
