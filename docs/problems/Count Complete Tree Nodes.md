---
date: 2024-04-05
difficulty: Easy
num: 222
related_topics:
  - Binary Search
  - Binary Tree
  - Bit Manipulation
  - Tree
return: Done
---

# Problem: 222. Count Complete Tree Nodes

## Description
Count tree nodes

## Approach / Thoughts
dfs

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def countNodes(self, root: Optional[TreeNode]) -> int:
        if not root: return 0
        
        self.count = 0
        def dfs(node):
            if not node: return

            dfs(node.left)
            self.count += 1
            dfs(node.right)
        dfs(root)
        return self.count
```
