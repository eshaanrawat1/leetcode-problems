---
date: 2024-01-08
difficulty: Easy
num: 872
related_topics:
  - Binary Tree
  - DFS
  - Tree
return: Done
---

# Problem: 872. Leaf Similar Trees

## Description
Check if the values for leaves of two trees follow the same sequence.

## Approach / Thoughts
Run a recursive dfs and store the values in a list - if the list broken at the given index is equal for both trees, return true.

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def leafSimilar(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:
        self.res = []
        def dfs(root):
            if root:
                if not root.left and not root.right:
                    self.res.append(root.val)
                    return
                dfs(root.left)
                dfs(root.right)

        dfs(root1)
        idx = len(self.res)
        dfs(root2)

        print(self.res)
        return self.res[:idx] == self.res[idx:]
```
