---
date: 2024-04-05
difficulty: Medium
num: 98
related_topics:
  - BST
  - Binary Tree
  - DFS
  - Tree
return: Review
---

# Problem: 98. Validate Binary Search Tree

## Description
Same as statement

## Approach / Thoughts
dfs with right and left bounds, keeping track

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        
        def dfs(node, left_bound, right_bound):
            if not node: return True
            if not (left_bound < node.val < right_bound): return False

            return (dfs(node.left, left_bound, node.val) and
                    dfs(node.right, node.val, right_bound))

        return dfs(root, float("-inf"), float("inf"))
            
```
