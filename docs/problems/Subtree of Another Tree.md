---
date: 2024-05-15
difficulty: Easy
num: 572
related_topics:
  - Binary Tree
  - DFS
  - Hash Function
  - String Matching
  - Tree
return: Done
---

# Problem: 572. Subtree Of Another Tree

## Description
find if one tree is subtree of another

## Approach / Thoughts
check if subtree of one is same as actual subtree, dfs

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        self.check = False
        def dfs(node):
            if not node:
                return 

            if self.sameTree(node, subRoot):
                self.check = True

            dfs(node.left)
            dfs(node.right)
        dfs(root)
        return self.check 

    def sameTree(self, r, q):
        if not r and not q:
            return True
        if not r or not q:
            return False
        if r.val != q.val:
            return False

        return self.sameTree(r.left, q.left) and self.sameTree(r.right, q.right)
```
