---
date: 2024-05-15
difficulty: Easy
num: 110
related_topics:
  - Binary Tree
  - DFS
  - Tree
return: Done
---

# Problem: 110. Balanced Binary Tree

## Description
check if bt is height balanced

## Approach / Thoughts
find depth of each subtree and have a check, dfs

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        self.balance = True
        def dfs(node):
            if not node:
                return -1
            
            l_depth = 1 + dfs(node.left)
            r_depth = 1 + dfs(node.right)

            check = abs(l_depth - r_depth) > 1
            if check: self.balance = False

            return max(l_depth, r_depth)
        
        dfs(root)
        return self.balance
```
