---
date: 2024-06-13
difficulty: Easy
num: 2367
related_topics:
  - Array
  - Enumeration
  - Hash Table
  - Two-Pointer
return: Done
---

# Problem: 2367. Number Of Arithmetic Triplets

## Description
Find triplets with conditions

## Approach / Thoughts
store in dict and check conditions

## Solution
```python
class Solution:
    def arithmeticTriplets(self, nums: List[int], diff: int) -> int:
        counts = {}
        for i, n in enumerate(nums):
            counts[n] = i
        
        triplets = 0
        for i, n in enumerate(nums):
            j = diff + n
            k = diff + j
            if j in counts and k in counts:
                if counts[k] > counts[j] > i:
                    triplets += 1
        return triplets
```
