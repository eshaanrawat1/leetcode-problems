---
date: 2024-04-05
difficulty: Medium
num: 103
related_topics:
  - BFS
  - Binary Tree
  - Tree
return: Done
---

# Problem: 103. Binary Tree Zigzag Level Order Traversal

## Description
Flip direction of each level

## Approach / Thoughts
bfs with direction change

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root: return []

        q = deque([root])
        res, direction = [], 1

        while q:
            temp = []
            for i in range(len(q)):
                node = q.popleft()
                temp.append(node.val)

                if node.left: q.append(node.left)
                if node.right: q.append(node.right)

            res.append(temp[::direction])
            direction *= -1
        return res
```
