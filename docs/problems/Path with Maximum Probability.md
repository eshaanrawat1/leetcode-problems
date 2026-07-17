---
date: 2024-07-21
difficulty: Medium
num: 1514
related_topics:
  - Array
  - Dynamic Programming
  - Heap (Priority Queue)
  - Shortest Path
return: Done
---

# Problem: 1514. Path With Maximum Probability

## Description

## Approach / Thoughts
reverse djikstra, max path sum

## Solution
```python
class Solution:
    def maxProbability(self, n: int, edges: List[List[int]], succProb: List[float], start_node: int, end_node: int) -> float:
        adj = defaultdict(list)
        for i, v in enumerate(edges):
            src, dest = v
            adj[src].append([dest, succProb[i]])
            adj[dest].append([src, succProb[i]])

        visit = set()
        max_heap = [[1, start_node]]

        while max_heap:
            prob, cur = heapq.heappop(max_heap)

            if cur == end_node:
                return -prob

            if cur in visit:
                continue
            visit.add(cur)

            for nei, mul_prob in adj[cur]:
                val = prob * mul_prob
                val *= -1 if val > 0 else 1
                heapq.heappush(max_heap, [val, nei])
        return 0
```
