---
date: 2026-02-05
difficulty: Medium
num: 3820
related_topics:
  - BFS
  - Staff
  - Tree
return: Done
---

# Problem: 3820. Pythagorean Distance Nodes In A Tree

## Description
same, node u has dx, dy, dz to target nodes x,y,z

find if dists are pythagorean

## Approach / Thoughts
get distances for 3 nodes x,y,z

loop over every node

## Solution
```python
class Solution:
    def specialNodes(self, n: int, edges: List[List[int]], x: int, y: int, z: int) -> int:
        # 5:50
        
        adj = defaultdict(list)
        for s, d in edges:
            adj[s].append(d)
            adj[d].append(s)

        def dist(src):
            dist = [inf] * n
            dist[src] = 0

            q = deque([[src, 0]])
            visit = {src}

            while q:
                n1, d1 = q.popleft()
                dist[n1] = d1

                for n2 in adj[n1]:
                    if n2 not in visit:
                        visit.add(n2)
                        q.append([n2, d1+1])
            return dist

        xdist = dist(x)
        ydist = dist(y)
        zdist = dist(z)

        res = 0
        for i in range(n):
            dists = [xdist[i], ydist[i], zdist[i]]
            dists.sort()

            if dists[0]**2 + dists[1]**2 == dists[2]**2:
                res += 1
        return res
```
