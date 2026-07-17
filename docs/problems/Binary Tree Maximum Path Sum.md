---
date: 2024-07-16
difficulty: Hard
num: 124
related_topics:
  - Binary Tree
  - DFS
  - Dynamic Programming
  - Tree
return: Review
---

# Problem: 124. Binary Tree Maximum Path Sum

## Description

## Approach / Thoughts
find all 4 possibilites

- left path

- right path

- root itself

- complete path

find max of those, store in global var

keep updating with max of path that can be fed to parent

- left path

- right path

- root only

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        self.cur_max = float("-inf")

        dp = {}
        def helper(node):
            if not node:
                return 0
            if node in dp:
                return dp[node]

            left = node.val + helper(node.left)
            right = node.val + helper(node.right)
            complete = node.val + helper(node.left) + helper(node.right)

            path = max(node.val, left, right, complete)
            self.cur_max = max(self.cur_max, path)


            result = max(node.val, left, right)
            dp[node] = result
            return result
        helper(root)
        return self.cur_max
```
