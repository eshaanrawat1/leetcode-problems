---
date: 2025-12-11
difficulty: Hard
num: 2642
related_topics:
  - Design
  - Dynamic Programming
  - Heap (Priority Queue)
  - Shortest Path
return: Done
---

# Problem: 2642. Design Graph With Shortest Path Calculator

## Description

## Approach / Thoughts
dijkstra

## Solution
```python
class Graph:

    def __init__(self, n: int, edges: List[List[int]]):
        self.adj = defaultdict(list)
        for s, d, w in edges:
            self.adj[s].append((d, w))

    def addEdge(self, edge: List[int]) -> None:
        s, d, w = edge
        self.adj[s].append((d, w))

    def shortestPath(self, node1: int, node2: int) -> int:
        pq = [[0, node1]]
        shortest = {node1:0}

        while pq:
            d1, n1 = heapq.heappop(pq)
            
            for n2, d2 in self.adj[n1]:
                if n2 not in shortest or d1+d2 < shortest[n2]:
                    shortest[n2] = d1+d2
                    heapq.heappush(pq, [d1+d2, n2])

        return shortest[node2] if node2 in shortest else -1


# Your Graph object will be instantiated and called as such:
# obj = Graph(n, edges)
# obj.addEdge(edge)
# param_2 = obj.shortestPath(node1,node2)
```
