---
date: 2024-12-19
difficulty: Medium
num: 2415
related_topics:
  - BFS
  - Binary Tree
  - DFS
  - Tree
return: Done
---

# Problem: 2415. Reverse Odd Levels Of Binary Tree

## Description

## Approach / Thoughts
reverse vals bfs

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def reverseOddLevels(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        q = deque([root])
        level = 0

        while q:
            odds = []
            for _ in range(len(q)):
                node = q.popleft()
                odds.append(node)

                if node.left: q.append(node.left)
                if node.right: q.append(node.right)

            if level % 2 == 1:
                l, r = 0, len(odds)-1
                while l < r:
                    odds[l].val, odds[r].val = odds[r].val, odds[l].val
                    l += 1
                    r -= 1
            
            level += 1
        return root
```
