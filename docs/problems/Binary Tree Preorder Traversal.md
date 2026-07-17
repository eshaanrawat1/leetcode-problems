---
date: 2023-12-25
difficulty: Easy
num: 144
related_topics:
  - Binary Tree
  - DFS
  - Stack
  - Tree
return: Done
---

# Problem: 144. Binary Tree Preorder Traversal

## Description
Preorder traversal that goes root, left values, right values

## Approach / Thoughts
Same as inorder, just append the root value before each recursive call so that you add as you go along rather than adding the leaf nodes first.

## Solution
```javascript
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res = []

        def helper(root):
            if not root:
                return 
            res.append(root.val)
            helper(root.left)
            helper(root.right)

        helper(root)

        return res
```
