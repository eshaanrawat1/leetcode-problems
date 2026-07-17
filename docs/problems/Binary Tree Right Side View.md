---
date: 2024-03-30
difficulty: Medium
num: 199
related_topics:
  - BFS
  - Binary Tree
  - DFS
  - Tree
return: Done
---

# Problem: 199. Binary Tree Right Side View

## Description
Get all the first nodes on the right in each level

## Approach / Thoughts
BFS with index tracker

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        if not root:
            return []

        q = deque([root])
        res = [root.val]

        while q:
            idx = 0
            for i in range(len(q)):
                node = q.popleft()
                if node.right:
                    if idx == 0: res.append(node.right.val)
                    q.append(node.right)
                    idx += 1
                if node.left:
                    if idx == 0: res.append(node.left.val)
                    q.append(node.left)
                    idx += 1
        return res
```
