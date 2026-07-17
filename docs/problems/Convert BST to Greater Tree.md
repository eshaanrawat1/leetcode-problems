---
date: 2024-07-01
difficulty: Medium
num: 538
related_topics:
  - BST
  - Binary Tree
  - DFS
  - Tree
return: Done
---

# Problem: 538. Convert Bst To Greater Tree

## Description
convert each node to sum all of nodes with values greater than it + itself

## Approach / Thoughts
reverse inorder dfs

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def convertBST(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        self.cur_sum = 0
        def reverse_inorder(node):
            if not node:
                return
            
            reverse_inorder(node.right)
            self.cur_sum += node.val
            node.val = self.cur_sum
            reverse_inorder(node.left)
        reverse_inorder(root)
        return root
```
