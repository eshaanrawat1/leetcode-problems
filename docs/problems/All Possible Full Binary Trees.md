---
date: 2026-04-17
difficulty: Medium
num: 894
related_topics:
  - Dynamic Programming
  - Tree
  - Recursion
  - Memoization
  - Binary Tree
return:
---

# Problem:  

## Description
Given an integer `n`, return _a list of all possible **full binary trees** with_ `n` _nodes_. Each node of each tree in the answer must have `Node.val == 0`.

Each element of the answer is the root node of one possible tree. You may return the final list of trees in **any order**.

A **full binary tree** is a binary tree where each node has exactly `0` or `2` children.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
[[Catalan Problems]] - build left and right return roots

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def allPossibleFBT(self, n: int) -> List[Optional[TreeNode]]:
        if n % 2 == 0:
            return []

        @lru_cache(None)
        def dfs(n):
            if n == 1:
                return [TreeNode(0)]
        
            res = []
            for i in range(1, n, 2):
                for l in dfs(i):
                    for r in dfs(n - i - 1):
                        root = TreeNode(0)
                        root.left = l
                        root.right = r
                        res.append(root)
            return res
        return dfs(n)