---
date: 2024-07-07
difficulty: Medium
num: 701
related_topics:
  - BST
  - Binary Tree
  - Tree
return: Done
---

# Problem: 701. Insert Into A Binary Search Tree

## Description

## Approach / Thoughts
insert at leaf, go left and right

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def insertIntoBST(self, root: Optional[TreeNode], val: int) -> Optional[TreeNode]:
        if not root:
            return TreeNode(val)
            
        cur = prev = root
        while cur:
            prev = cur
            if cur.val < val:
                cur = cur.right
            else:
                cur = cur.left     
        
        if prev.val > val:
            prev.left = TreeNode(val)
        else:
            prev.right = TreeNode(val)
        return root
```
