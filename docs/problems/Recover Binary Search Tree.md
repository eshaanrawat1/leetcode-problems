---
date: 2026-03-20
difficulty: Medium
num: 99
related_topics:
  - Tree
  - DFS
  - BST
  - Binary Tree
return: Review
---

# Problem:  

## Description
You are given the `root` of a binary search tree (BST), where the values of **exactly** two nodes of the tree were swapped by mistake. _Recover the tree without changing its structure_.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
[[Tree]]

inorder traversal of bst - sorted, find mismatched values

another solution idea -> first violation assign to prev (since it is a greater than case)
second violation assign to current since it is a less than case
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def recoverTree(self, root: Optional[TreeNode]) -> None:
        """
        Do not return anything, modify root in-place instead.
        """
        self.prev = self.first = self.second = None

        def dfs(node):
            if not node:
                return 

            dfs(node.left)
            if self.prev and node.val < self.prev.val:
                if not self.first:
                    self.first = self.prev
                self.second = node

            self.prev = node
            dfs(node.right)

        dfs(root)
        self.first.val, self.second.val = self.second.val, self.first.val
```

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def recoverTree(self, root: Optional[TreeNode]) -> None:
        """
        Do not return anything, modify root in-place instead.
        """

        res = []
        def dfs(node):
            if not node:
                return 

            dfs(node.left)
            res.append(node)
            dfs(node.right)
        dfs(root)


        sr = sorted(res, key=lambda x: x.val)
        swap = []

        for x, y in zip(res, sr):
            if x != y:
                swap.append(x)

        a, b = swap
        a.val, b.val = b.val, a.val
