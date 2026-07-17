---
date: 2026-04-06
difficulty: Easy
num: 653
related_topics:
  - Mid-Level
  - Hash Table
  - Two Pointers
  - Tree
  - DFS
  - BFS
  - BST
  - Binary Tree
return:
---

# Problem:  

## Description
Given the `root` of a binary search tree and an integer `k`, return `true` _if there exist two elements in the BST such that their sum is equal to_ `k`, _or_ `false` _otherwise_.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
inorder is sorted
two sum 2 - generator left and right

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findTarget(self, root: Optional[TreeNode], k: int) -> bool:
        
        def dfs(root):
            if root:
                yield from dfs(root.left)
                yield root.val
                yield from dfs(root.right)

        def rdfs(root):
            if root:
                yield from rdfs(root.right)
                yield root.val
                yield from rdfs(root.left)

        lgen = dfs(root)
        rgen = rdfs(root)

        l, r = next(lgen), next(rgen)
        while l < r:
            if l + r == k:
                return True
            
            if l + r < k:
                l = next(lgen)
            else:
                r = next(rgen)
        return False