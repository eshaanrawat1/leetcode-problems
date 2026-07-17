---
date: 2024-03-11
difficulty: Easy
num: 112
related_topics:
  - BFS
  - Binary Tree
  - DFS
  - Tree
return: Done
---

# Problem: 112. Path Sum

## Description
If there is a root to leaf path sum where all values sum to target, return True

## Approach / Thoughts
dfs, keep track of target by decrementing

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        res = []
        self.dfs(root, targetSum, res)
        return True in res

    def dfs(self, root, target, res):
        if not root:
            return 

        if root.val == target and not root.left and not root.right:
            res.append(True) 
        
        self.dfs(root.left, target-root.val, res)
        self.dfs(root.right, target-root.val, res)
        
```
