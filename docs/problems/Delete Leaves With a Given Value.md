---
date: 2024-05-16
difficulty: Medium
num: 1325
related_topics:
  - Binary Tree
  - DFS
  - Tree
return: Done
---

# Problem: 1325. Delete Leaves With A Given Value

## Description

## Approach / Thoughts
dfs all the way then delete

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def removeLeafNodes(self, root: Optional[TreeNode], target: int) -> Optional[TreeNode]:
        
        def dfs(node, prev, is_left):
            if not node:
                return 
            
            dfs(node.left, node, True)
            dfs(node.right, node, False)

            if node.val == target and not node.left and not node.right:
                if is_left:
                    prev.left = None
                else:
                    prev.right = None
                return
            
        dummy = TreeNode(-1, root, root)
        dfs(root, dummy, True)

        return root if dummy.left else None
```
