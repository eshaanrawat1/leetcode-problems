---
date: 2026-04-08
difficulty: Medium
num: 669
related_topics:
  - Staff
  - Tree
  - DFS
  - BST
  - Binary Tree
return:
---

# Problem:  

## Description
Given the `root` of a binary search tree and the lowest and highest boundaries as `low` and `high`, trim the tree so that all its elements lies in `[low, high]`. Trimming the tree should **not** change the relative structure of the elements that will remain in the tree (i.e., any node's descendant should remain a descendant). It can be proven that there is a **unique answer**.

Return _the root of the trimmed binary search tree_. Note that the root may change depending on the given bounds.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
assign result to left and right -> if invalid, skip and return result of pruned subtree

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def trimBST(self, root: Optional[TreeNode], low: int, high: int) -> Optional[TreeNode]:

        def dfs(root):
            if not root:
                return None

            if root.val < low:
                return dfs(root.right)
            if root.val > high:
                return dfs(root.left)

            root.left = dfs(root.left)
            root.right = dfs(root.right)
            return root
        return dfs(root)

        