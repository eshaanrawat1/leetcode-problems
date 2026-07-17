---
date: 2024-10-24
difficulty: Medium
num: 951
related_topics:
  - Binary Tree
  - DFS
  - Tree
return: Done
---

# Problem: 951. Flip Equivalent Binary Trees

## Description
same, check if equivalent

## Approach / Thoughts
flip or don’t flip

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def flipEquiv(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:

        def dfs(p, q):
            if not p and not q:
                return True
            if not p or not q:
                return False
            if p.val != q.val:
                return False

            stay = dfs(p.left, q.left) and dfs(p.right, q.right)
            flip = dfs(p.left, q.right) and dfs(p.right, q.left)

            return stay or flip
        
        return dfs(root1, root2)
```
