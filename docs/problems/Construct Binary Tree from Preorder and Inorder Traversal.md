---
date: 2024-07-10
difficulty: Medium
num: 105
related_topics:
  - Array
  - Divide and Conquer
  - Hash Table
  - Tree
return: Done
---

# Problem: 105. Construct Binary Tree From Preorder And Inorder Traversal

## Description

## Approach / Thoughts
use preorder for finding roots of each subtree

use inorder for finding left and right

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        def dfs(pre, ino):
            if not pre or not ino:
                return None

            root = TreeNode(pre[0])
            mid = ino.index(pre[0])

            root.left = dfs(pre[1:mid+1], ino[:mid])
            root.right = dfs(pre[mid+1:], ino[mid+1:])
            

            return root
        return dfs(preorder, inorder)
```
