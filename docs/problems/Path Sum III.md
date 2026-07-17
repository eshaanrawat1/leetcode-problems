---
date: 2024-08-15
difficulty: Medium
num: 437
related_topics:
  - Binary Tree
  - DFS
  - Tree
return: Review
---

# Problem: 437. Path Sum Iii

## Description

## Approach / Thoughts
dfs for each node

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> int:
        self.count = 0

        def path(node, cur_sum):
            if not node:
                return 
            
            if cur_sum + node.val == targetSum:
                self.count += 1

            path(node.left, cur_sum + node.val)
            path(node.right, cur_sum + node.val)

        def dfs(node):
            if not node:
                return

            path(node, 0)

            dfs(node.left)
            dfs(node.right)
        
        dfs(root)
        return self.count
```
