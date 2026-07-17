---
date: 2024-03-06
difficulty: Easy
num: 783
related_topics:
  - BFS
  - BST
  - Binary Tree
  - DFS
  - Tree
return: Done
---

# Problem: 783. Minimum Distance Between Bst Nodes

## Description
Find minimum difference between nodes

## Approach / Thoughts
Store all values in a list and sort

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minDiffInBST(self, root: Optional[TreeNode]) -> int:
        vals = [root.val]

        q = [root]
        for n in q:
            if n.left:
                q.append(n.left)
                vals.append(n.left.val)
            if n.right:
                q.append(n.right)
                vals.append(n.right.val)
        
        vals.sort()
        diff = float("inf")
        for i in range(1, len(vals)):
            if vals[i]-vals[i-1] < diff:
                diff = vals[i]-vals[i-1]
        return diff
```
