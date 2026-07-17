---
date: 2024-07-18
difficulty: Medium
num: 1530
related_topics:
  - Binary Tree
  - DFS
  - Tree
return: Done
---

# Problem: 1530. Number Of Good Leaf Nodes Pairs

## Description

## Approach / Thoughts
for each subtree find distance of left leaves and right leaves, count pairs

pass up + 1 to parent

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def countPairs(self, root: TreeNode, distance: int) -> int:
        self.pairs = 0

        def dfs(node):
            if not node:
                return []
            if not node.left and not node.right:
                return [1]

            left = dfs(node.left)
            right = dfs(node.right)

            for x in left:
                for y in right:
                    if x + y <= distance:
                        self.pairs += 1

            result = left + right
            return [item+1 for item in result]
            
        dfs(root)
        return self.pairs
```
