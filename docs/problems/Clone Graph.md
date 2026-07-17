---
date: 2024-05-10
difficulty: Medium
num: 133
related_topics:
  - BFS
  - DFS
  - Graph
  - Hash Table
return: Done
---

# Problem: 133. Clone Graph

## Description
deep copy graph

## Approach / Thoughts
similar to LL, store clones

## Solution
```python
"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

from typing import Optional
class Solution:
    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:
        cpy = {}

        def dfs(node):
            if node in cpy:
                return cpy[node]
            
            clone = Node(node.val)
            cpy[node] = clone
            for nei in node.neighbors:
                clone.neighbors.append(dfs(nei))          
            return clone
        
        return dfs(node) if node else None
```
