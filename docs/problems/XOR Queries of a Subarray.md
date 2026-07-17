---
date: 2024-09-12
difficulty: Medium
num: 1310
related_topics:
  - Array
  - Bit Manipulation
  - Prefix Sum
return: Done
---

# Problem: 1310. Xor Queries Of A Subarray

## Description

## Approach / Thoughts
prefix array xor

a ^ a = 0

## Solution
```python
class Solution:
    def xorQueries(self, arr: List[int], queries: List[List[int]]) -> List[int]:
        for i in range(1, len(arr)):
            arr[i] ^= arr[i-1]
        
        res = []
        for start, end in queries:
            if start > 0:
                res.append(arr[start-1] ^ arr[end])
            else:
                res.append(arr[end])
        return res
```
