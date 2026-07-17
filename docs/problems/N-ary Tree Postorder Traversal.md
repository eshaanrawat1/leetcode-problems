---
date: 2024-08-25
difficulty: Easy
num: 590
related_topics:
  - DFS
  - Stack
  - Tree
return: Done
---

# Problem: 590. N Ary Tree Postorder Traversal

## Description

## Approach / Thoughts
dfs

## Solution
```python
"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""

class Solution:
    def postorder(self, root: 'Node') -> List[int]:
        res = []
        def dfs(node):
            if not node:
                return

            for chi in node.children:
                dfs(chi)
            res.append(node.val)
        dfs(root)
        return res
```
