---
date: 2024-04-15
difficulty: Medium
num: 623
related_topics:
  - BFS
  - Binary Tree
  - DFS
  - Tree
return: Done
---

# Problem: 623. Add One Row To Tree

## Description

## Approach / Thoughts
BFS change pointers

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def addOneRow(self, root: Optional[TreeNode], val: int, depth: int) -> Optional[TreeNode]:
        if depth == 1: 
            v = TreeNode(val)
            v.left = root
            return v

        q = deque([root])
        d = 1
        check = True

        while q and check:
            for i in range(len(q)):
                node = q.popleft()

                if depth-1 == d:
                    left_node, right_node = TreeNode(val), TreeNode(val)
                    node.left, left_node.left = left_node, node.left
                    node.right, right_node.right = right_node, node.right
                    check = False

                if node.left: q.append(node.left)
                if node.right: q.append(node.right)
            d += 1
        return root
```
