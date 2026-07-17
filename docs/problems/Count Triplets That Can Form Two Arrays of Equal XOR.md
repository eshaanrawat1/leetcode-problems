---
date: 2024-05-29
difficulty: Medium
num: 1442
related_topics:
  - Array
  - Bit Manipulation
  - Hash Table
  - Math
  - Prefix Sum
return: Done
---

# Problem: 1442. Count Triplets That Can Form Two Arrays Of Equal Xor

## Description
find all 2 subarrays with same xor

## Approach / Thoughts
calculate xors of all 2 subs

## Solution
```python
class Solution:
    def countTriplets(self, arr: List[int]) -> int:
        N = len(arr)
        res = 0

        for i in range(N-1):
            a = 0
            for j in range(i+1, N):
                a ^= arr[j-1]
                b = 0
                for k in range(j, N):
                    b ^= arr[k]
                    if a == b:
                        res += 1
        return res
```
