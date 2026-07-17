---
date: 2024-12-24
difficulty: Medium
num: 3372
related_topics:
  - BFS
  - DFS
  - Tree
return: Done
---

# Problem: 3372. Maximize The Number Of Target Nodes After Connecting Trees I

## Description
same, k dist apart

connect both trees

## Approach / Thoughts
k dist apart pre compute

k-1 for tree 2

find max

## Solution
```python
class Solution:
    def maxTargetNodes(self, edges1: List[List[int]], edges2: List[List[int]], k: int) -> List[int]:
        n, m = len(edges1) + 1, len(edges2) + 1

        def farthest(G, src, amt):
            q = deque([[src, 0]])
            shortest = {src:0}

            while q:
                n1, d1 = q.popleft()

                for n2 in G[n1]:
                    if n2 not in shortest:
                        shortest[n2] = d1 + 1
                        q.append([n2, d1 + 1])

            return sum(1 for key, val in shortest.items() if val <= amt)


        adj1 = defaultdict(list)
        adj2 = defaultdict(list)

        for u, v in edges1:
            adj1[u].append(v)
            adj1[v].append(u)

        for u, v in edges2:
            adj2[u].append(v)
            adj2[v].append(u)

        one = [farthest(adj1, i, k) for i in range(n)]
        two = max([farthest(adj2, i, k-1) for i in range(m)])

        return [n + two for n in one]
```
