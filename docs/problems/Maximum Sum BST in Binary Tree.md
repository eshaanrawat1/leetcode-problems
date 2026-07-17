---
date: 2024-12-28
difficulty: Hard
num: 1373
related_topics:
  - BST
  - Binary Tree
  - DFS
  - Dynamic Programming
  - Tree
return: Review
---

# Problem: 1373. Maximum Sum Bst In Binary Tree

## Description

## Approach / Thoughts
postorder, return to node l, r bounds and sum

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxSumBST(self, root: Optional[TreeNode]) -> int:
        self.res = 0

        def dfs(node):
            if not node:
                return inf, -inf, 0

            l = dfs(node.left)
            r = dfs(node.right)
            v = node.val

            if l and r and v > l[1] and v < r[0]:
                s = v + l[2] + r[2]
                cur_min = min(v, l[0])
                cur_max = max(v, r[1])
                self.res = max(self.res, s)
                return cur_min, cur_max, s
        dfs(root)
        return self.res
```
