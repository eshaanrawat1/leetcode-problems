---
date: 2026-03-20
difficulty: Medium
num: 96
related_topics:
  - Dynamic Programming
  - Backtracking
  - Tree
  - Binary Search
  - Binary Tree
return:
---

# Problem:  

## Description
Given an integer `n`, return _all the structurally unique **BST'**s (binary search trees), which has exactly_ `n` _nodes of unique values from_ `1` _to_ `n`. Return the answer in **any order**.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
[[Catalan Problems]]

build from multiple options - cartesian product

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def generateTrees(self, n: int) -> List[Optional[TreeNode]]:

        def dfs(lo, hi):
            if lo > hi:
                return [None]
                
            if lo == hi:
                return [TreeNode(lo)]

            res = []
            for i in range(lo, hi+1):
                for v1 in dfs(lo, i-1):
                    for v2 in dfs(i+1, hi):
                        root = TreeNode(i)
                        root.left = v1
                        root.right = v2
                        res.append(root)
            return res[:]
        return dfs(1, n)