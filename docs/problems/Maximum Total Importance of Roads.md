---
date: 2024-06-28
difficulty: Medium
num: 2285
related_topics:
  - Graph
  - Greedy
  - Heap (Priority Queue)
  - Sorting
return: Done
---

# Problem: 2285. Maximum Total Importance Of Roads

## Description

## Approach / Thoughts
maximize cities based on edge count, then count roads

## Solution
```python
class Solution:
    def maximumImportance(self, n: int, roads: List[List[int]]) -> int:
        edges = {}
        for i in range(n):
            edges[i] = 0

        for src, dest in roads:
            edges[src] += 1
            edges[dest] += 1
        
        counts = [(-v, k) for k, v in edges.items()]
        heapq.heapify(counts)

        indices = {}
        while counts:
            edge_count, city = heapq.heappop(counts)
            indices[city] = n
            n -= 1
       
        total = 0
        for src, dest in roads:
            total += (indices[src] + indices[dest])
        return total
```
