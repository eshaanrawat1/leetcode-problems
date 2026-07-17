---
date: 2026-05-01
difficulty: Medium
num: 1008
related_topics:
  - Array
  - String
return:
---

# Problem:  

## Description
Given an array of integers preorder, which represents the **preorder traversal** of a BST (i.e., **binary search tree**), construct the tree and return _its root_.

It is **guaranteed** that there is always possible to find a binary search tree with the given requirements for the given test cases.

A **binary search tree** is a binary tree where for every node, any descendant of `Node.left` has a value **strictly less than** `Node.val`, and any descendant of `Node.right` has a value **strictly greater than** `Node.val`.

A **preorder traversal** of a binary tree displays the value of the node first, then traverses `Node.left`, then traverses `Node.right`.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
l, r construct
pre first is root, find index where greater than is

o(n) with bounds

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def bstFromPreorder(self, preorder: List[int]) -> Optional[TreeNode]:
        n = len(preorder)

        def dfs(l, r):
            if l > r:
                return None

            root_val = preorder[l]
            root = TreeNode(root_val)

            idx = l
            while idx < n and preorder[idx] <= root_val:
                idx += 1

            root.left = dfs(l+1, idx-1)
            root.right = dfs(idx, r)
            return root

        return dfs(0, n-1)
        
        
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def bstFromPreorder(self, preorder: List[int]) -> Optional[TreeNode]:
        self.i = 0
        n = len(preorder)

        def dfs(l, r):
            if self.i == n:
                return None

            root = None
            root_val = preorder[self.i]

            if l < root_val < r:
                root = TreeNode(root_val)
                self.i += 1
                root.left = dfs(l, root_val)
                root.right = dfs(root_val, r)
            else:
                return None
            
            return root

        return dfs(-inf, inf)