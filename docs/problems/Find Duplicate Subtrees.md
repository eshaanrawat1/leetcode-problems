---
date: 2024-06-27
difficulty: Medium
num: 652
related_topics:
  - Binary Tree
  - DFS
  - Hash Table
  - Tree
return: Done
---

# Problem: 652. Find Duplicate Subtrees

## Description

## Approach / Thoughts
serialize subtree as we go, check for first duplicate

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findDuplicateSubtrees(self, root: Optional[TreeNode]) -> List[Optional[TreeNode]]:
        res = []
        subtrees = defaultdict(list)
        def serialize(node):
            if not node:
                return 'N'

            s = ",".join([str(node.val), serialize(node.left), serialize(node.right)])
            if len(subtrees[s]) == 1:
                res.append(node)
            subtrees[s].append(node)
            return s
        serialize(root)
        return res
```
