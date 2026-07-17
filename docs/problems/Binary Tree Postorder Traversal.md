---
date: 2023-12-25
difficulty: Easy
num: 145
related_topics:
  - Binary Tree
  - DFS
  - Stack
  - Tree
return: Done
---

# Problem: 145. Binary Tree Postorder Traversal

## Description
Postorder traversal is bottom up, left, right, then root

## Approach / Thoughts
Same as other traversals but add the root value at the end.

## Solution
```javascript
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res = []

        def helper(root):
            if not root:
                return 
            helper(root.left)
            helper(root.right)
            res.append(root.val)

        helper(root)

        return res
```
