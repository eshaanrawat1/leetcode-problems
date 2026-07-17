---
date: 2025-01-30
difficulty: Hard
num: 2493
related_topics:
  - BFS
  - Graph
  - Union Find
return: Review
---

# Problem: 2493. Divide Nodes Into The Maximum Number Of Groups

## Description
graph coloring but all outgoing edges of a node have to be in level+1 or level - 1

## Approach / Thoughts
odd cycles impossible to color bipartite

can use bfs and check if already seen node has the same level as current

check connected components

## Solution
```python
class UnionFind:
    def __init__(self, n):
        self.par = list(range(n))
        self.rank = [1] * n

    def find(self, n):
        while n != self.par[n]:
            n = self.par[n]
        return n

    def union(self, n1, n2):
        p1 = self.find(n1)
        p2 = self.find(n2)

        if p1 == p2:
            return

        if self.rank[p1] >= self.rank[p2]:
            self.rank[p1] += self.rank[p2]
            self.par[p2] = p1
        else:
            self.rank[p2] += self.rank[p1]
            self.par[p1] = p2


class Solution:
    def magnificentSets(self, n: int, edges: List[List[int]]) -> int:
        uf = UnionFind(n+1)

        adj = defaultdict(list)
        for s,d in edges:
            adj[s].append(d)
            adj[d].append(s)

            uf.union(s, d)

        def color(start):
            q = deque([[start, 1]])

            seen = [0] * (n+1)
            seen[start] = 1
            level = 1

            while q:
                cur, level = q.popleft()
                for nei in adj[cur]:
                    if not seen[nei]:
                        seen[nei] = level+1
                        q.append((nei, level+1))
                    elif seen[nei] == level:
                        return -1
            return level

        visit = [0] * (n+1)
        def connect(start):
            q = deque([start])
            
            nodes = {start}
            while q:
                cur = q.popleft()
                for nei in adj[cur]:
                    if not visit[nei]:
                        visit[nei] = 1
                        q.append(nei)
                        nodes.add(nei)
            return nodes

        res = cur_min = 0
        components = list({uf.find(i) for i in range(1,n+1)})

        for c in components:
            if uf.rank[c] == 1:
                res += 1
            else:
                group = connect(c)
                vals = (color(k) for k in group)

                cur_max = max(vals)
                if cur_max == -1:
                    return -1
                res += cur_max

        return res          
```
