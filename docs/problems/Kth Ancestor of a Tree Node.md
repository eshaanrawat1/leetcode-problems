---
date: 2026-01-29
difficulty: Hard
num: 1483
related_topics:
  - BFS
  - Binary Search
  - Bit Manipulation
  - DFS
  - Design
  - Dynamic Programming
  - Tree
return: Done
---

# Problem: 1483. Kth Ancestor Of A Tree Node

## Description

## Approach / Thoughts
binary lift precomp

## Solution
```python
class TreeAncestor:

    def __init__(self, n: int, parent: List[int]):
        self.n = n
        self.lg = ceil(log2(n)) + 1
        self.up = [[-1] * self.lg for _ in range(n)]

        self._lift(parent)

    def _lift(self, parent):
        for i, p in enumerate(parent):
            self.up[i][0] = p

        for k in range(1, self.lg):
            for node in range(self.n):
                if self.up[node][k-1] != -1:
                    self.up[node][k] = self.up[ self.up[node][k-1] ][k-1]

    def getKthAncestor(self, node: int, k: int) -> int:
        cur = node
        for i in range(30, -1, -1):
            if (1 << i) & k:
                cur = self.up[cur][i]
                if cur == -1:
                    break
        return cur


# Your TreeAncestor object will be instantiated and called as such:
# obj = TreeAncestor(n, parent)
# param_1 = obj.getKthAncestor(node,k)
```
