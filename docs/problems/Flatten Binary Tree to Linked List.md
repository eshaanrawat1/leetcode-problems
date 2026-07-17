---
date: 2024-07-10
difficulty: Medium
num: 114
related_topics:
  - Binary Tree
  - DFS
  - Linked List
  - Stack
  - Tree
return: Done
---

# Problem: 114. Flatten Binary Tree To Linked List

## Description

## Approach / Thoughts
maintain pre-order

if a node has a left child, move right subtree to bottom of left subtree

move entire subtree to the right

repeat

![[Attachments/Untitled 5.png|Untitled 5.png]]

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def flatten(self, root: Optional[TreeNode]) -> None:
        """
        Do not return anything, modify root in-place instead.
        """
        cur = root
        while cur:
            if cur.left:
                p = cur.left
                while p.right:
                    p = p.right
                p.right = cur.right
                cur.right = cur.left
                cur.left = None
            cur = cur.right
        return root
```
