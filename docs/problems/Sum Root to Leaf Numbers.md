---
date: 2024-04-05
difficulty: Medium
num: 129
related_topics:
  - Binary Tree
  - DFS
  - Tree
return: Done
---

# Problem: 129. Sum Root To Leaf Numbers

## Description
Get sum of all root to leaf paths

## Approach / Thoughts
DFS check if node exists and if it is a leaf, sum all paths

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumNumbers(self, root: Optional[TreeNode]) -> int:
        self.res = 0

        def dfs(node, path):
            if not node:
                return 

            if not node.left and not node.right:
                path = (path*10) + node.val
                self.res += path
                return

            dfs(node.left, path*10 + node.val)
            dfs(node.right, path*10 + node.val)
        dfs(root, 0)
        return self.res
```
