---
date: 2024-07-07
difficulty: Medium
num: 337
related_topics:
  - Binary Tree
  - DFS
  - Dynamic Programming
  - Tree
return: Done
---

# Problem: 337. House Robber Iii

## Description
house rob, but cannot rob parent and children

## Approach / Thoughts
take current, skip current

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rob(self, root: Optional[TreeNode]) -> int:
        def dfs(node):
            if not node:
                return [0, 0]

            left = dfs(node.left)
            right = dfs(node.right)

            take = node.val + left[1] + right[1]
            skip = max(left) + max(right)

            return [take, skip]
        return max(dfs(root))
```
