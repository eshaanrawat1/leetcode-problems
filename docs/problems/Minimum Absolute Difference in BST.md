---
date: 2024-04-05
difficulty: Easy
num: 530
related_topics:
  - BFS
  - BST
  - Binary Tree
  - DFS
  - Tree
return: Done
---

# Problem: 530. Minimum Absolute Difference In Bst

## Description
Same as problem

## Approach / Thoughts
DFS gives in order traversal sorted for BST

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def getMinimumDifference(self, root: Optional[TreeNode]) -> int:
        res = []

        def dfs(root):
            if not root: return

            dfs(root.left)
            res.append(root.val)
            dfs(root.right)
        
        dfs(root)
        min_dif = float("inf")
        for i in range(len(res)):
            min_dif = min(min_dif, abs(res[i]-res[i-1]))
        return min_dif
```
