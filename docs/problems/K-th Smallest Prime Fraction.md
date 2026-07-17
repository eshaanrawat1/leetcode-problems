---
date: 2024-05-09
difficulty: Medium
num: 786
related_topics:
  - Array
  - Binary Search
  - Heap (Priority Queue)
  - Sorting
  - Two-Pointer
return: Done
---

# Problem: 786. K Th Smallest Prime Fraction

## Description

## Approach / Thoughts
find frac sort and return

## Solution
```python
class Solution:
    def kthSmallestPrimeFraction(self, arr: List[int], k: int) -> List[int]:
        fracs = []

        arr.sort()
        A = len(arr)
        for i in range(A):
            for j in range(i+1, A):
                fracs.append((arr[i], arr[j], arr[i]/arr[j]))
        
        fracs.sort(key=lambda x: x[-1])
        return fracs[k-1][0:2]
```
