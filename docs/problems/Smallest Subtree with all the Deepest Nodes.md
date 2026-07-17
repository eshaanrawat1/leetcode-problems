---
date: 2025-04-03
difficulty: Medium
num: 865
related_topics:
  - BFS
  - Binary Tree
  - DFS
  - Hash Table
  - Tree
return: Done
---

# Problem: 865. Smallest Subtree With All The Deepest Nodes

## Description
find deepest nodes, find lca of all of them

## Approach / Thoughts
bfs on last level, find lca of two nodes farthest apart

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def subtreeWithAllDeepest(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if not root.left and not root.right:
            return root

        depths = {}
        parents = {}

        res = None
        q = deque([[root, 0]])

        while q:
            res = []
            for _ in range(len(q)):
                node, depth = q.popleft()
                res.append([node, depth])
                depths[node] = depth

                if node.left:
                    q.append((node.left, depth+1))
                    parents[node.left] = node
                
                if node.right:
                    q.append((node.right, depth+1))
                    parents[node.right] = node  

        x, xdepth = res[0]
        y, ydepth = res[-1]

        while x != y:
            if xdepth > ydepth:
                x = parents[x]
                xdepth = depths[x]
            else:
                y = parents[y]
                ydepth = depths[y]
        return x
```
