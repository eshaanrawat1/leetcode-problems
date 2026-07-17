---
date: 2024-08-05
difficulty: Medium
num: 378
related_topics:
  - Array
  - Binary Search
  - Heap (Priority Queue)
  - Matrix
  - Sorting
return: Done
---

# Problem: 378. Kth Smallest Element In A Sorted Matrix

## Description

## Approach / Thoughts
find smallest number which has ≥ k lesser numbers (consider duplicates)

binary search

## Solution
```python
class Solution:
    def kthSmallest(self, matrix: List[List[int]], k: int) -> int:
        N = len(matrix)

        def feasible(threshold):
            count = 0
            j = N-1
            for i in range(N):    
                while j >= 0 and matrix[i][j] > threshold:
                    j -= 1
                count += j+1
            return count >= k

        res = None
        l, r = matrix[0][0], matrix[-1][-1]
        while l <= r:
            m = (l + r) // 2
            if feasible(m):
                res = m
                r = m - 1
            else:
                l = m + 1
        return res
```
