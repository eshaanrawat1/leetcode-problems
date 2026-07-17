---
date: 2024-02-27
difficulty: Medium
num: 513
related_topics:
  - BFS
  - Binary Tree
  - DFS
  - Tree
return: Done
---

# Problem: 513. Find Bottom Left Tree Value

## Description
Find the first value in the deepest level of the tree.

## Approach / Thoughts
Use a q and use BFS level order traversal in opposite order. The last node added will be the leftmost bottom one

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findBottomLeftValue(self, root: Optional[TreeNode]) -> int:
        q = [root]
        for node in q:
            if node.right: q.append(node.right)
            if node.left: q.append(node.left)
        return q[-1].val
            
```
