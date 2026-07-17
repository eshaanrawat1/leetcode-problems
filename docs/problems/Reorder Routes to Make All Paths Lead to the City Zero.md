---
date: 2024-06-16
difficulty: Medium
num: 1466
related_topics:
  - BFS
  - DFS
  - Graph
return: Review
---

# Problem: 1466. Reorder Routes To Make All Paths Lead To The City Zero

## Description
count all edges to reroute to city 0

## Approach / Thoughts
add adj list of edges and direction with number 1 or 0

traverse and add cost, if 1 it is in opposite direction

## Solution
```python
class Solution:
    def minReorder(self, n: int, connections: List[List[int]]) -> int:
        graph = defaultdict(list)
        for src, dest in connections:
            graph[src].append((dest, 1))
            graph[dest].append((src, 0))

        flips = 0
        q = deque([0])
        visited = {0}

        while q:
            node = q.popleft()
            for city, cost in graph[node]:
                if city not in visited:
                    visited.add(city)
                    flips += cost
                    q.append(city)
        return flips
```
