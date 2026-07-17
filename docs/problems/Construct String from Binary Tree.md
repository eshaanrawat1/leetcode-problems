---
date: 2024-07-07
difficulty: Medium
num: 606
related_topics:
  - Binary Tree
  - DFS
  - String
  - Tree
return: Done
---

# Problem: 606. Construct String From Binary Tree

## Description
add parenthesis to tree

## Approach / Thoughts
preorder dfs check cases with parenthesis

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def tree2str(self, root: Optional[TreeNode]) -> str:
        def dfs(node):
            if not node:
                return ''
            
            cur = str(node.val)
            left = dfs(node.left)
            right = dfs(node.right)

            if left and right:
                left = '(' + left + ')'
                right = '(' + right + ')'
            elif not left and right:
                left = '()'
                right = '(' + right + ')'
            elif left:
                left = '(' + left + ')'

            return cur + left + right
        return dfs(root)
```
