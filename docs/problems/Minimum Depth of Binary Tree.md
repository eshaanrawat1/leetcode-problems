---
date: 2024-08-15
difficulty: Easy
num: 111
related_topics:
  - BFS
  - Binary Tree
  - DFS
  - Tree
return: Done
---

# Problem: 111. Minimum Depth Of Binary Tree

## Description

## Approach / Thoughts
bfs

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0

        q = deque([[root, 1]])
        while q:
            for _ in range(len(q)):
                cur, level = q.popleft()

                if not cur.left and not cur.right:
                    return level

                if cur.left:
                    q.append([cur.left, level+1])
                if cur.right:
                    q.append([cur.right, level+1])
```
