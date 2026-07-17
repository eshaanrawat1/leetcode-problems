---
date: 2024-01-24
difficulty: Medium
num: 1985
related_topics:
  - Array
  - Divide and Conquer
  - Heap (Priority Queue)
  - Quickselect
  - Sorting
  - String
return: Done
---

# Problem: 1985. Find The Kth Largest Integer In The Array

## Description
Same as title, but array elements are strings

## Approach / Thoughts
Max heap

## Solution
```python
class Solution:
    def kthLargestNumber(self, nums: List[str], k: int) -> str:
        heap_list = [-int(s) for s in nums]
        heapq.heapify(heap_list)

        ans = None
        for i in range(k):
            ans = heapq.heappop(heap_list)
        return str(-ans)
```
