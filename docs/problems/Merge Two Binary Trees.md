---
date: 2024-05-15
difficulty: Easy
num: 617
related_topics:
  - BFS
  - Binary Tree
  - DFS
  - Tree
return: Done
---

# Problem: 617. Merge Two Binary Trees

## Description
new binary tree after merging

## Approach / Thoughts
merge complete nodes, share incomplete

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def mergeTrees(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> Optional[TreeNode]:
        def dfs(p, q):
            if p and q:
                root = TreeNode(p.val + q.val)
                root.left = dfs(p.left, q.left)
                root.right = dfs(p.right, q.right)
                return root
            else:
                return p or q
        return dfs(root1, root2)
```
