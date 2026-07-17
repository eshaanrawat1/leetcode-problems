---
date: 2023-12-25
difficulty: Easy
num: 94
related_topics:
  - Binary Tree
  - DFS
  - Stack
  - Tree
return: Done
---

# Problem: 94. Binary Tree Inorder Traversal

## Description
Traverse it in order.

## Approach / Thoughts
Run a recursive solution to traverse the left part of a tree first, then add the root value, so that once the entire tree branch reaches a leaf, it adds that value, then traverse the right.

## Solution
```javascript
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res = [] 

        def helper(root):
            if not root:
                return 
            helper(root.left)
            res.append(root.val)
            helper(root.right)
        helper(root)

        return res
```
