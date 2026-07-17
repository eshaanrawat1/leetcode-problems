---
date: 2026-03-18
difficulty: Hard
num: 968
related_topics:
  - Principal
  - Dynamic Programming
  - Tree
  - DFS
  - Binary Tree
return: Review
---

# Problem:  

## Description
You are given the `root` of a binary tree. We install cameras on the tree nodes where each camera at a node can monitor its parent, itself, and its immediate children.

Return _the minimum number of cameras needed to monitor all nodes of the tree_.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
check postorder state from parent 

[[Tree DP]]

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minCameraCover(self, root: Optional[TreeNode]) -> int:
        # 0 -> need monitor
        # 1 -> have camera
        # 2 -> no cam, monitored

        self.res = 0

        def dfs(node):
            if not node:
                return 2

            l = dfs(node.left)
            r = dfs(node.right)

            if l == 2 and r == 2:
                if node == root:
                    self.res += 1
                return 0

            if l == 0 or r == 0:
                self.res += 1
                return 1

            if l == 1 or r == 1:
                return 2

        dfs(root)
        return self.res