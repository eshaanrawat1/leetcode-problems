---
date: 2025-04-03
difficulty: Medium
num: 1123
related_topics:
  - BFS
  - Binary Tree
  - DFS
  - Hash Table
  - Tree
return: Done
---

# Problem: 1123. Lowest Common Ancestor Of Deepest Leaves

## Description
same as 865 - lca of deepest nodes

## Approach / Thoughts
bfs to find last level deepest nodes, lca on farthest apart

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def lcaDeepestLeaves(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if not root.left and not root.right:
            return root

        depths = {}
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
                    node.left.par = node
                
                if node.right:
                    q.append((node.right, depth+1))
                    node.right.par = node      

        x, xdepth = res[0]
        y, ydepth = res[-1]

        while x != y:
            if xdepth > ydepth:
                x = x.par
                xdepth = depths[x]
            else:
                y = y.par
                ydepth = depths[y]
        return x
```
