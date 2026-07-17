---
date: 2026-02-10
difficulty: Medium
num: 2049
related_topics:
  - Array
  - Binary Tree
  - DFS
  - Staff
  - Tree
return: Done
---

# Problem: 2049. Count Nodes With The Highest Score

## Description

## Approach / Thoughts
postorder calc left, right, remainder nodes

## Solution
```python
class Solution:
    def countHighestScoreNodes(self, parents: List[int]) -> int:
        n = len(parents)

        adj = defaultdict(list)
        for i, v in enumerate(parents):
            if v == -1:
                continue
            adj[v].append(i)

        scores = [0] * n

        def dfs(cur):
            if len(adj[cur]) == 0:
                scores[cur] = n - 1
                return 1

            if len(adj[cur]) == 1:
                c1 = dfs(adj[cur][0])
                scores[cur] = max(1, (n - c1 - 1)) * c1
                return c1 + 1

            c1 = dfs(adj[cur][0])
            c2 = dfs(adj[cur][1])
            scores[cur] = c1 * c2 * max(1, (n - c1 - c2 - 1))
            return c1 + c2 + 1

        dfs(0)
        mv = max(scores)
        return Counter(scores)[mv]
```
