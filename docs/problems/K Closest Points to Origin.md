---
date: 2024-01-24
difficulty: Medium
num: 973
related_topics:
  - Array
  - Divide and Conquer
  - Geometry
  - Heap (Priority Queue)
  - Math
  - Sorting
return: Done
---

# Problem: 973. K Closest Points To Origin

## Description
Same as title

## Approach / Thoughts
Use distance formula, store distance and point in a list and heapify to find k closest min heap.

## Solution
```python
class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        heap_list = []
        ans = []
        
        for p in points:
            dist = math.sqrt(p[0]**2 + p[1]**2)
            heap_list.append((dist, p))

        heapq.heapify(heap_list)
        for i in range(k):
            ans.append(heapq.heappop(heap_list)[-1])
        return ans
```
