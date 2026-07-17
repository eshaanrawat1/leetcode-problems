---
date: 2026-01-06
difficulty: Medium
num: 1339
related_topics:
  - Binary Tree
  - DFS
  - Tree
return: Done
---

# Problem: 1339. Maximum Product Of Splitted Binary Tree

## Description

## Approach / Thoughts
2 dfs - postorder

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxProduct(self, root: Optional[TreeNode]) -> int:
        total = 0

        def dfs(root):
            nonlocal total
            if not root:
                return 

            total += root.val 
            dfs(root.left)
            dfs(root.right)
        

        max_prod = 0
        def dfs2(root):
            nonlocal total, max_prod
            if not root:
                return 0 

            cur = root.val + dfs2(root.left) + dfs2(root.right)
            max_prod = max(max_prod, cur * (total-cur))
            return cur

        dfs(root)
        dfs2(root)
        return max_prod % (10**9+7)
```
