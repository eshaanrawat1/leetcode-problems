---
date: 2024-04-27
difficulty: Hard
num: 834
related_topics:
  - DFS
  - Dynamic Programming
  - Graph
  - Tree
return: Review
---

# Problem: 834. Sum Of Distances In Tree

## Description
For each node find the sum of edges from node to all other nodes

## Approach / Thoughts
dfs and get some arbitrary root and all distances

use algorithm of close and far to add nodes as we get closer and farther

## Solution
```python
class Solution:
    def sumOfDistancesInTree(self, n: int, edges: List[List[int]]) -> List[int]:
        adj = defaultdict(list)
        for src, dest in edges:
            adj[src].append(dest)
            adj[dest].append(src)

        result = [0] * n
        count = [1] * n
        self.root_sum = 0

        def dfs(current, parent, depth):
            total = 1
            for child in adj[current]:
                if child != parent:
                    total += dfs(child, current, depth + 1)
                    self.root_sum += (depth + 1)
            count[current] = total
            return total
        dfs(0, -1, 0)

        def second_dfs(current, parent, ans):
            result[current] = ans
            for child in adj[current]:
                if child != parent:
                    second_dfs(child, current, ans + n - count[child] - count[child])
        second_dfs(0, -1, self.root_sum)
        return result
```
