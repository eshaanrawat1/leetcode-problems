---
date: 2024-04-13
difficulty: Easy
num: 404
related_topics:
  - BFS
  - Binary Tree
  - DFS
  - Tree
return: Done
---

# Problem: 404. Sum Of Left Leaves

## Description
Same as problem

## Approach / Thoughts
Dfs, have bool to check if left, add if it is left leaf

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumOfLeftLeaves(self, root: Optional[TreeNode]) -> int:
        self.res = 0
        def dfs(node, isLeft):
            if not node: return
            if not node.left and not node.right and isLeft: self.res += node.val

            dfs(node.left, True)
            dfs(node.right, False)
        dfs(root, False)
        return self.res
```
