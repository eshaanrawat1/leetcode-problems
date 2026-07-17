---
date: 2024-07-23
difficulty: Hard
num: 332
related_topics:
  - DFS
  - Eulerian Circuit
  - Graph
return: Review
---

# Problem: 332. Reconstruct Itinerary

## Description

## Approach / Thoughts
walk eulerian path

start at jfk, sort adj list and preprocess

hit dead end, add that to result and start stack path over again from last visit vertex

basically build the path from back to front

reverse path

## Solution
```python
class Solution:
    def findItinerary(self, tickets: List[List[str]]) -> List[str]:
        adj = defaultdict(list)
        for src, dest in tickets:
            adj[src].append(dest)
        
        for src in adj:
            adj[src].sort(reverse=True)

        res = []
        stack = ["JFK"]

        while stack:
            cur_city = stack[-1]

            while adj[cur_city]:
                stack.append(adj[cur_city].pop())
                cur_city = stack[-1]
            else:
                res.append(stack.pop())
        return res[::-1]
```
