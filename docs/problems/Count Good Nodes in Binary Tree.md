---
date: 2024-05-17
difficulty: Medium
num: 1448
related_topics:
  - BFS
  - Binary Tree
  - DFS
  - Tree
return: Done
---

# Problem: 1448. Count Good Nodes In Binary Tree

## Description
same, good nodes are greatest in root to node path

## Approach / Thoughts
dfs keep track of current maximum

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        res = [0]
        def dfs(node, cur_max):
            if not node:
                return
            
            if node.val >= cur_max:
                res[0] += 1
            
            dfs(node.left, max(cur_max, node.val))
            dfs(node.right, max(cur_max, node.val))
        dfs(root, float("-inf"))
        return res[0]
```
