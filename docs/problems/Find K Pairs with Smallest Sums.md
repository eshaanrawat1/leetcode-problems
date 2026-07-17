---
date: 2024-06-20
difficulty: Medium
num: 373
related_topics:
  - Array
  - Heap (Priority Queue)
return: Done
---

# Problem: 373. Find K Pairs With Smallest Sums

## Description

## Approach / Thoughts
sweep rows and then add columns 0 in order

## Solution
```python
class Solution:
    def kSmallestPairs(self, nums1: List[int], nums2: List[int], k: int) -> List[List[int]]:
        pq = []
        M, N = len(nums1), len(nums2)

        def push(i, j):
            if i < M and j < N:
                heapq.heappush(pq, [nums1[i] + nums2[j], i, j])
        
        push(0, 0)
        result = []

        while pq and len(result) < k:
            _, i, j = heapq.heappop(pq)
            result.append([nums1[i], nums2[j]])
            push(i, j+1)
            if j == 0:
                push(i+1, 0)
        return result
```
