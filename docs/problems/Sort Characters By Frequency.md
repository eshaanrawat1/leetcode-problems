---
date: 2024-02-06
difficulty: Medium
num: 451
related_topics:
  - Bucket Sort
  - Counting
  - Hash Table
  - Heap (Priority Queue)
  - Sorting
  - String
return: Done
---

# Problem: 451. Sort Characters By Frequency

## Description
Given a string s, return a new string with the most frequent characters at the front in any order.

## Approach / Thoughts
Initially max heap, then counting sort

## Solution
```python
class Solution:
    def frequencySort(self, s: str) -> str:
        c1 = Counter(s)

        heap_list = [(-value, key) for key, value in c1.items()]
        heapq.heapify(heap_list)

        res = ""
        for i in range(len(heap_list)):
            node = heapq.heappop(heap_list)
            res += node[1] * -node[0]
        return res
```
