---
date: 2026-04-08
difficulty: Medium
num: 687
related_topics:
  - Staff
  - Tree
  - DFS
  - Binary Tree
return:
---

# Problem:  

## Description
Given the `root` of a binary tree, return _the length of the longest path, where each node in the path has the same value_. This path may or may not pass through the root.

**The length of the path** between two nodes is represented by the number of edges between them.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
return 2 values - val and size of max path - recursion postorder

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def longestUnivaluePath(self, root: Optional[TreeNode]) -> int:
        self.res = 1

        def dfs(root):
            if not root:
                return [-inf, 0]

            lval, lsize = dfs(root.left)
            rval, rsize = dfs(root.right)

            if lval == rval == root.val:
                self.res = max(self.res, lsize + rsize + 1)
                return [root.val, max(1 + lsize, 1 + rsize)]

            elif lval == root.val:
                self.res = max(self.res, lsize + 1)
                return [root.val, 1 + lsize]

            elif rval == root.val:
                self.res = max(self.res, rsize + 1)
                return [root.val, 1 + rsize]

            return [root.val, 1]

        dfs(root)
        return self.res-1

