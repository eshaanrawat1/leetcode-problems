---
date: 2024-06-27
difficulty: Easy
num: 101
related_topics:
  - BFS
  - Binary Tree
  - DFS
  - Tree
return: Done
---

# Problem: 101. Symmetric Tree

## Description
same find if mirror tree

## Approach / Thoughts
same tree but left and right

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        def isSame(p, q):
            if not p and not q:
                return True
            if not p or not q:
                return False
            if p.val != q.val:
                return False
            
            close = isSame(p.left, q.right)
            far = isSame(p.right, q.left)

            return close and far
        
        return isSame(root.left, root.right)
```
