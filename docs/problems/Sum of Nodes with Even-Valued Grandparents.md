---
date: 2024-03-07
difficulty: Medium
num: 1315
related_topics:
  - BFS
  - Binary Tree
  - DFS
  - Tree
return: Done
---

# Problem: 1315. Sum Of Nodes With Even Valued Grandparents

## Description
Same as problem

## Approach / Thoughts
Run dfs and check grandchildren nodes if even

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumEvenGrandparent(self, root: TreeNode) -> int:
        res = []
        self.dfs(root, res)
        return sum(res)

    def dfs(self, root, res):
        if not root:
            return

        if root.val % 2 == 0:
            if root.left:
                if root.left.left: res.append(root.left.left.val)
                if root.left.right: res.append(root.left.right.val)
            if root.right:
                if root.right.left: res.append(root.right.left.val)
                if root.right.right: res.append(root.right.right.val)

        self.dfs(root.left, res)
        self.dfs(root.right, res)
        
```
