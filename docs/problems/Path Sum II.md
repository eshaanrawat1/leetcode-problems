---
date: 2024-03-11
difficulty: Medium
num: 113
related_topics:
  - Backtracking
  - Binary Tree
  - DFS
  - Tree
return: Done
---

# Problem: 113. Path Sum Ii

## Description
Find all root to leaf path sums

## Approach / Thoughts
Same dfs, add values to a list and append lists

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:
        path, res = [], []
        self.dfs(root, targetSum, path, res)
        return res

    def dfs(self, root, targetSum, path, res):
        if not root:
            return 
        
        if root.val == targetSum and not root.left and not root.right:
            res.append(path[:] + [root.val])
            return 
        
        self.dfs(root.left, targetSum-root.val, path + [root.val], res)
        self.dfs(root.right, targetSum-root.val, path + [root.val], res)
        
```
