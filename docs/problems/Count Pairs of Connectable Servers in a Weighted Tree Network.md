---
date: 2025-12-22
difficulty: Medium
num: 3067
related_topics:
  - Array
  - DFS
  - Tree
return: Done
---

# Problem: 3067. Count Pairs Of Connectable Servers In A Weighted Tree Network

## Description

## Approach / Thoughts
precompute distances from root node mod k

store children distances, multiply pairs from there

## Solution
```python
class Solution:
    def countPairsOfConnectableServers(self, edges: List[List[int]], k: int) -> List[int]:
        # calc distance from each node to other nodes
        # ie 0 -> 1,2,etc

        # artificially root node x
        # get all children in subtree
        # say node 0 has 4 children, 4 possible collections of paths since 
        # must go thru root 

        # precompute pairs of sums? ie if distance is mod 5 use hashmap
        # to find how many other complementary mods there are, sum it 
        # only considers nodes with val > cur, no duplicates 

        n = len(edges) + 1

        adj = defaultdict(list)
        for s, d, w in edges:
            adj[s].append((d, w))
            adj[d].append((s, w))

        def bfs(start):
            dist = [0] * n
            visit = {start}
            q = deque([[start, 0]])

            while q:
                n1, d1 = q.popleft()
                for n2, d2 in adj[n1]:
                    if n2 not in visit:
                        visit.add(n2)
                        dist[n2] = d1+d2
                        q.append([n2, d1+d2])
            
            return [x % k for x in dist]


        def get_children(target, node):
            res = [node]
            visit = {target, node}

            q = deque([node])
            while q:
                cur = q.popleft()
                for nei, _ in adj[cur]:
                    if nei not in visit:
                        visit.add(nei)
                        q.append(nei)
                        res.append(nei)
            return res


        def calc_pairs(node):
            dist = bfs(node)

            children = []
            for nei, _ in adj[node]:
                children.append(get_children(node, nei))

            m = len(children)
            if m == 1:
                return 0

            divs = [0] * m
            for i in range(m):
                for c in children[i]:
                    divs[i] += (dist[c] == 0)

            res = 0
            for i in range(m):
                for j in range(i+1, m):
                    res += divs[i] * divs[j]
            return res
        
        return [calc_pairs(i) for i in range(n)]


        
```
