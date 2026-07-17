---
date: 2024-06-26
difficulty: Medium
num: 1382
related_topics:
  - BST
  - Binary Tree
  - DFS
  - Divide and Conquer
  - Greedy
  - Tree
return: Done
---

# Problem: 1382. Balance A Binary Search Tree

## Description

## Approach / Thoughts
inorder for sorted

store values and binary search to create bst

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def balanceBST(self, root: TreeNode) -> TreeNode:
        res = []
        def dfs(node):
            if not node:
                return
            
            dfs(node.left)
            res.append(node.val)
            dfs(node.right)
        dfs(root)
        
        def construct(left, right):
            if left > right:
                return None
            
            if left == right:
                return TreeNode(res[left])
            
            mid = (left + right) // 2
            current = TreeNode(res[mid])
            current.left = construct(left, mid-1)
            current.right = construct(mid+1, right)

            return current

        return construct(0, len(res) - 1)
```
