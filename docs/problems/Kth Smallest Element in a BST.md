---
date: 2024-03-11
difficulty: Medium
num: 230
related_topics:
  - Binary Search Tree
  - Binary Tree
  - DFS
  - Tree
return: Done
---

# Problem: 230. Kth Smallest Element In A Bst

## Description
Same as problem

## Approach / Thoughts
Dfs to collect all nodes and heapify

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        res = []
        self.dfs(root, res)

        heapq.heapify(res)
        for i in range(k):
            node = heapq.heappop(res)
        return node

    def dfs(self, root, res):
        if not root:
            return
        
        res.append(root.val)
        self.dfs(root.left, res)
        self.dfs(root.right, res)
        
```
