---
date: 2026-06-28
difficulty: Medium
num: 3970
related_topics:
  - 
return:
---

# Problem: 3970. Shortest Path With At Most K Consecutive Identical Characters

## Description
You are given an integer `n` representing the number of nodes in a **directed weighted** graph, numbered from 0 to `n - 1`. This is represented by a 2D integer array `edges`, where `edges[i] = [ui, vi, wi]` represents a directed edge from node `ui` to node `vi` with weight `wi`.

You are also given a string `labels` of length `n`, where `labels[i]` is the character assigned to node `i`, and an integer `k`.

Return the **minimum** **total** edge weight of a path from node 0 to node `n - 1` such that the concatenation of the labels of the nodes along the path contains **at most** `k` **consecutive** **identical** characters. If no valid path exists, return -1.

## Approach / Thoughts
[[Weekly Contest 507]]

missed intuition - need to dijkstra on every possible state of node,k values - since we can reach a node with a potential higher distance but better k value which might be better in the future 
## Solution
```python
class Solution:
    def shortestPath(self, n: int, edges: List[List[int]], labels: str, k: int) -> int:

        adj = defaultdict(list)
        for u, v, w in edges:
            adj[u].append((v, w))


        def dijkstra():
            shortest = {}
            shortest[(0, 1)] = 0
            
            pq = [[0, 0, labels[0], 1]]
            while pq:
                d1, n1, c1, cnt1 = heapq.heappop(pq)

                for n2, d2 in adj[n1]:
                    c2 = labels[n2]
                    if c1 != c2:
                        if (n2, 1) not in shortest or d1+d2 < shortest[(n2, 1)]:
                            heapq.heappush(pq, [d1+d2, n2, c2, 1])
                            shortest[(n2, 1)] = d1+d2
                    else:
                        if cnt1 < k:
                            if (n2, cnt1+1) not in shortest or d1+d2 < shortest[(n2, cnt1+1)]:
                                heapq.heappush(pq, [d1+d2, n2, c2, cnt1+1])  
                                shortest[(n2, cnt1+1)] = d1+d2
            
            res = inf
            for v in shortest:
                if v[0] == n-1:
                    res = min(res, shortest[v])
            return res if res != inf else -1

        return dijkstra()
```