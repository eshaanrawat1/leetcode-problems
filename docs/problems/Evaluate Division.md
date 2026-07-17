---
date: 2025-12-02
difficulty: Medium
num: 399
related_topics:
  - Array
  - BFS
  - DFS
  - Graph
  - Shortest Path
  - String
  - Union Find
return: Done
---

# Problem: 399. Evaluate Division

## Description
same, chain rules such as a/b=x, b/c=y

## Approach / Thoughts
graph with weights

build in reverse, start at 1 and multiple chain

## Solution
```python
class Solution:
    def calcEquation(self, equations: List[List[str]], values: List[float], queries: List[List[str]]) -> List[float]:
        adj = defaultdict(list)
        for (s, d), v in zip(equations, values):
            adj[d].append((s, v))
            adj[s].append((d, 1/v))

        def bfs(src, dst):
            if src not in adj or dst not in adj:
                return -1
                
            q = deque([[src, 1]])
            visit = {src}

            while q:
                cur, val = q.popleft()
                if cur == dst:
                    return val

                for nei, v in adj[cur]:
                    if nei not in visit:
                        q.append((nei, val * v))
                        visit.add(nei)
            return -1

        return [bfs(dst, src) for src, dst in queries]
```
