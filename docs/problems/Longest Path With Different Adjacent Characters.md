---
date: 2026-05-20
difficulty: Hard
num: 2246
related_topics:
  - Array
  - String
  - Tree
  - Depth-First Search
  - Graph Theory
  - Topological Sort
return:
---

# Problem: 2246. Longest Path With Different Adjacent Characters

## Description
You are given a **tree** (i.e. a connected, undirected graph that has no cycles) **rooted** at node `0` consisting of `n` nodes numbered from `0` to `n - 1`. The tree is represented by a **0-indexed** array `parent` of size `n`, where `parent[i]` is the parent of node `i`. Since node `0` is the root, `parent[0] == -1`.

You are also given a string `s` of length `n`, where `s[i]` is the character assigned to node `i`.

Return *the length of the **longest path** in the tree such that no pair of **adjacent** nodes on the path have the same character assigned to them.*

## Approach / Thoughts
break into components
longest path in a component is diameter

extra - dfs solution - similar to longest path in binary tree - with some conditions

## Solution
```python
class Solution:
    def longestPath(self, parent: List[int], s: str) -> int:
        n = len(parent)
        adj = defaultdict(list)

        for i, p in enumerate(parent):
            if p == -1 or s[i] == s[p]:
                continue 
            adj[i].append(p)
            adj[p].append(i)

        vis = [0] * n

        def tree_diameter(node):
            
            def bfs(src, v):
                q = deque([(src, 0)])
                farthest = None

                while q:
                    cur, d = q.popleft()
                    farthest = (cur, d)
                    for nei in adj[cur]:
                        if vis[nei] == v:
                            q.append((nei, d+1))
                            vis[nei] += 1
                return farthest

            leaf, ld = bfs(node, 0)
            vis[leaf] += 1
            dia, dd = bfs(leaf, 1)
            return dd

        res = 0
        for i in range(n):
            if vis[i]:
                continue
            vis[i] = 1
            res = max(res, tree_diameter(i)+1)
        return res


class Solution:
    def longestPath(self, parent: List[int], s: str) -> int:
        n = len(parent)
        adj = defaultdict(list)

        for i, p in enumerate(parent):
            if p == -1:
                continue 
            adj[i].append(p)
            adj[p].append(i)

        self.res = 0

        def dfs(root, par):
            m1 = m2 = 0
            for nei in adj[root]:
                if nei == par:
                    continue 

                v = dfs(nei, root)
                if s[root] != s[nei]:
                    if v > m1:
                        m1, m2 = v, m1
                    elif v > m2:
                        m2 = v

            self.res = max(self.res, m1+m2+1)
            return m1+1

        dfs(0, -1)
        return self.res```