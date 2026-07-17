---
date: 2024-01-22
difficulty: Easy
num: 100
related_topics:
  - BFS
  - Binary Tree
  - DFS
  - Tree
return: Done
---

# Problem: 100. Same Tree

## Description
Check if two trees are the same

## Approach / Thoughts
Use a helper function to dfs the tree, check if values are equal.

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        p_res, q_res = [], []
        stack = []

        def helper(root, arr):
            curr = root
            while curr or stack:
                while curr:
                    stack.append(curr)
                    arr.append(curr.val)
                    curr = curr.left
                arr.append(curr)
                curr = stack.pop()
                curr = curr.right
            return arr
        return helper(p, p_res) == helper(q, q_res)
```
