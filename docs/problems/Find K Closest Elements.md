---
date: 2024-06-13
difficulty: Medium
num: 658
related_topics:
  - Array
  - Binary Search
  - Heap (Priority Queue)
  - Sliding Window
  - Sorting
  - Two-Pointer
return: Review
---

# Problem: 658. Find K Closest Elements

## Description

## Approach / Thoughts
sort array by key and return portion

## Solution
```python
class Solution:
    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:
        arr.sort(key=lambda y: abs(y-x))
        return sorted(arr[:k])
```
