---
date: 2024-07-22
difficulty: Medium
num: 787
related_topics:
  - BFS
  - DFS
  - Dynamic Programming
  - Graph
  - Heap (Priority Queue)
  - Shortest Path
return: Review
---

# Problem: 787. Cheapest Flights Within K Stops

## Description

## Approach / Thoughts
bellman ford, for each number of stops, check every possible edge route and update min

## Solution
```python
class Solution:
    def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:
        prices = [float("inf")] * n
        prices[src] = 0

        for i in range(k+1):
            tmp = prices[:]
            for s, d, p in flights:
                if prices[s] == float("inf"):
                    continue
                if prices[s] + p < tmp[d]:
                    tmp[d] = prices[s] + p
            prices = tmp
        return prices[dst] if prices[dst] != float("inf") else -1
```
