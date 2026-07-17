---
date: 2024-03-30
difficulty: Medium
num: 102
related_topics:
  - BFS
  - Binary Tree
  - Tree
return: Done
---

# Problem: 102. Binary Tree Level Order Traversal

## Description
Level order traversal group by depth

## Approach / Thoughts
Do level order and index

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []

        q = [[root, 0]]

        for n in q:
            node, depth = n[0], n[1]

            if node.left: q.append([node.left, depth+1])
            if node.right: q.append([node.right, depth+1])

        res = [[] for _ in range(q[-1][-1] + 1)]

        for node, depth in q:
            res[depth].append(node.val)
        return res
```
