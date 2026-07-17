---
date: 2026-03-22
difficulty: Medium
num: 106
related_topics:
  - Array
  - Hash Table
  - Divide and Conquer
  - Tree
  - Binary Tree
return:
---

# Problem:  

## Description
Given two integer arrays `inorder` and `postorder` where `inorder` is the inorder traversal of a binary tree and `postorder` is the postorder traversal of the same tree, construct and return _the binary tree_.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
[[Tree]]

same, inorder breaks left right
postorder last node is root -> do right node first

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, inorder: List[int], postorder: List[int]) -> Optional[TreeNode]:

        post = postorder[:]
        mapping = {v:i for i,v in enumerate(inorder)}
        n = len(inorder)

        def dfs(start, end):
            if not post or start > end:
                return None

            val = post.pop()
            idx = mapping[val]

            root = TreeNode(val)
            root.right = dfs(idx+1, end)
            root.left = dfs(start, idx-1)
            return root

        return dfs(0, n-1)
            
        