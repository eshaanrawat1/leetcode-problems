---
date: 2024-12-24
difficulty: Hard
num: 3203
related_topics:
  - BFS
  - DFS
  - Dynamic Programming
  - Tree
return: Done
---

# Problem: 3203. Find Minimum Diameter After Merging Two Trees

## Description

## Approach / Thoughts
farthest of farthest

either d1, d2, or half of each + 1

## Solution
```python
class Solution:
    def minimumDiameterAfterMerge(self, edges1: List[List[int]], edges2: List[List[int]]) -> int:
        
        def diameter(G, src):
            q = deque([[src, 0]])
            seen = {src}

            while q:
                n1, d1 = q.popleft()
                for n2 in G[n1]:
                    if n2 not in seen:
                        seen.add(n2)
                        q.append([n2, d1+1])
            return d1

        def farthest_node(G):
            q = deque([[0, 0]])
            prev = None
            seen = {0}

            while q:
                n1, d1 = q.popleft()
                prev = n1
                for n2 in G[n1]:
                    if n2 not in seen:
                        seen.add(n2)
                        q.append([n2, d1+1])
            return prev

        adj1 = defaultdict(list)
        adj2 = defaultdict(list)

        for u, v in edges1:
            adj1[u].append(v)
            adj1[v].append(u)
        
        for u, v in edges2:
            adj2[u].append(v)
            adj2[v].append(u)

        n1 = farthest_node(adj1)
        n2 = farthest_node(adj2)

        d1 = diameter(adj1, n1)
        d2 = diameter(adj2, n2)

        return max(d1, d2, ceil(d1 / 2) + ceil(d2 / 2) + 1)
```
