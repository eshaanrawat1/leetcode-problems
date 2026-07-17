---
date: 2024-05-15
difficulty: Medium
num: 235
related_topics:
  - BST
  - Binary Tree
  - DFS
  - Tree
return: Done
---

# Problem: 235. Lowest Common Ancestor Of A Binary Search Tree

## Description
find lca of bst

## Approach / Thoughts
use properties of bst, lower and upper bounds

find lowest node that is in between

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        self.min_node = root
        min_bound = min(p.val, q.val)
        max_bound = max(p.val, q.val)

        def dfs(node):
            if not node:
                return 

            if min_bound <= node.val <= max_bound:
                self.min_node = node

            if node.val > max_bound:
                dfs(node.left)
            
            if node.val < min_bound:
                dfs(node.right)
        dfs(root)
        return self.min_node
```
