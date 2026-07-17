---
date: 2024-04-21
difficulty: Medium
num: 2368
related_topics:
  - Array
  - BFS
  - DFS
  - Graph
  - Hash Table
  - Tree
  - Union Find
return: Done
---

# Problem: 2368. Reachable Nodes With Restrictions

## Description
find all reachable nodes from 0

## Approach / Thoughts
bfs keep track of visited nodes

## Solution
```python
class Solution:
    def reachableNodes(self, n: int, edges: List[List[int]], restricted: List[int]) -> int:
        paths = defaultdict(list)

        for src, dest in edges:
            paths[src].append(dest)
            paths[dest].append(src)

        visited = set(restricted)
        q = deque([0])
        count = 0

        while q:
            node = q.popleft()
            if node not in visited: count += 1

            for p in paths[node]:
                if p not in visited:
                    q.append(p)
                    visited.add(node)
        return count
```
