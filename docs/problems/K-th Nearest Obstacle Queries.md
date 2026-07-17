---
date: 2024-09-08
difficulty: Medium
num: 3275
related_topics:
  - Array
  - Heap (Priority Queue)
return: Done
---

# Problem: 3275. K Th Nearest Obstacle Queries

## Description

## Approach / Thoughts
max heap of size k, top is the kth farthest

## Solution
```python
class Solution:
    def resultsArray(self, queries: List[List[int]], k: int) -> List[int]:
        pq, res = [], []
        
        for x, y in queries:
            dist = abs(x) + abs(y)
            heapq.heappush(pq, -dist)

            while len(pq) > k:
                heapq.heappop(pq)

            if len(pq) < k:
                res.append(-1)
            else:
                res.append(-pq[0])
        return res
```
