---
date: 2024-07-07
difficulty: Medium
num: 958
related_topics:
  - BFS
  - Binary Tree
  - Tree
return: Done
---

# Problem: 958. Check Completeness Of A Binary Tree

## Description
check if each level filled, and last is left filled

## Approach / Thoughts
check completeness of each level, if node after null false

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isCompleteTree(self, root: Optional[TreeNode]) -> bool:
        q = deque([root])
        while q:
            node = q.popleft()

            if node:
                q.append(node.left)
                q.append(node.right)
            else:
                while q:
                    if q.popleft():
                        return False
        return True
```
