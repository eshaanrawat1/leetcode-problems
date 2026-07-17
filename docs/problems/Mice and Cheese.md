---
date: 2025-11-28
difficulty: Medium
num: 2611
related_topics:
  - Array
  - Greedy
  - Heap (Priority Queue)
  - Sorting
return: Done
---

# Problem: 2611. Mice And Cheese

## Description

## Approach / Thoughts
choose most valuable picks for k → use heap for sort on difference

## Solution
```python
class Solution:
    def miceAndCheese(self, reward1: List[int], reward2: List[int], k: int) -> int:
        pq = [(-(a-b), a, b) for a,b in zip(reward1, reward2)]
        heapq.heapify(pq)

        res = 0
        for i in range(k):
            diff, a, b = heapq.heappop(pq)
            res += a
        
        n = len(pq)
        for i in range(n):
            diff, a, b = pq[i]
            res += b
        return res
```
