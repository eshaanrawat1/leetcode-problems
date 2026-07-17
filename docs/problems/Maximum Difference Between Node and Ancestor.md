---
date: 2024-03-30
difficulty: Medium
num: 1026
related_topics:
  - Binary Tree
  - DFS
  - Tree
return: Done
---

# Problem: 1026. Maximum Difference Between Node And Ancestor

## Description
Same as problem

## Approach / Thoughts
DFS keeping track of max value of that subtree

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxAncestorDiff(self, root: Optional[TreeNode]) -> int:
        self.res = -1

        def helper(node, max_val, min_val):
            if not node:
                self.res = max(self.res, abs(max_val - min_val))
                return
            
            max_val = max(max_val, node.val)
            min_val = min(min_val, node.val)

            helper(node.left, max_val, min_val)
            helper(node.right, max_val, min_val)

        helper(root, float("-inf"), float("inf"))
        return self.res
```
