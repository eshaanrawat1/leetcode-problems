---
date: 2024-05-15
difficulty: Easy
num: 543
related_topics:
  - Binary Tree
  - DFS
  - Tree
return: Done
---

# Problem: 543. Diameter Of Binary Tree

## Description
Find max spanning path

## Approach / Thoughts
Find max left and right paths for each node, dfs

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        res = [0]
        def dfs(node):
            if not node:
                return -1
            
            l_depth = 1 + dfs(node.left)
            r_depth = 1 + dfs(node.right)

            res[0] = max(res[0], l_depth + r_depth)
            return max(l_depth, r_depth)
        dfs(root)
        return res[0]

        
```
