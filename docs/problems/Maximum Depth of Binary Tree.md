---
date: 2024-01-10
difficulty: Easy
num: 104
related_topics:
  - BFS
  - Binary Tree
  - DFS
  - Tree
return: Done
---

# Problem: 104. Maximum Depth Of Binary Tree

## Description
Find max depth of Binary Tree

## Approach / Thoughts
Initial approach was simple dfs recursive problem.

- base case is null node which return 0

- second base case is leaf node, return 1

- else, take the depth of each left and right subtree and add 1

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        elif not root.left and not root.right:
            return 1
        else:
            return 1 + max(self.maxDepth(root.left), 
                            self.maxDepth(root.right))
```
