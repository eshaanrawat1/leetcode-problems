---
date: 2026-04-17
difficulty: Easy
num: 897
related_topics:
  - Stack
  - Tree
  - DFS
  - BST
  - Binary Tree
return:
---

# Problem:  

## Description
Given the `root` of a binary search tree, rearrange the tree in **in-order** so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
append to running pointer

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def increasingBST(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        dummy = cur = TreeNode(-1)

        def dfs(root):
            nonlocal cur
            
            if not root:
                return

            dfs(root.left)

            cur.right = root
            cur = cur.right
            cur.left = None

            dfs(root.right)

        dfs(root)
        
        cur2 = dummy.right
        dummy.right = None
        return cur2