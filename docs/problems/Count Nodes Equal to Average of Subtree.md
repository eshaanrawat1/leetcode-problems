---
date: 2024-07-07
difficulty: Medium
num: 2265
related_topics:
  - Binary Tree
  - DFS
  - Tree
return: Done
---

# Problem: 2265. Count Nodes Equal To Average Of Subtree

## Description

## Approach / Thoughts
postorder calculate sum and return it

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def averageOfSubtree(self, root: TreeNode) -> int:  
        self.count = 0
        def dfs(node):
            if not node:
                return [0, 0]

            l = dfs(node.left)
            r = dfs(node.right)
            
            res = [node.val + l[0] + r[0],
                    1 + l[1] + r[1]]

            if res[0] // res[1] == node.val:
                self.count += 1
            return res

        dfs(root)
        return self.count
```
