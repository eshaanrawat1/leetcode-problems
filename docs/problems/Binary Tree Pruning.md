---
date: 2024-07-11
difficulty: Medium
num: 814
related_topics:
  - Binary Tree
  - DFS
  - Tree
return: Done
---

# Problem: 814. Binary Tree Pruning

## Description
prune if not 1 in subtrees

## Approach / Thoughts
postorder dfs, find sum

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pruneTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        def dfs(node):
            if not node:
                return 0

            left = dfs(node.left)
            right = dfs(node.right)

            if not left:
                node.left = None
            if not right:
                node.right = None

            return node.val + left + right

        dummy = TreeNode(1, root, None)
        dfs(dummy)
        return root if dummy.left else None
```
