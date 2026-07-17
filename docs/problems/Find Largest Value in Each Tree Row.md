---
date: 2024-07-07
difficulty: Medium
num: 515
related_topics:
  - BFS
  - Binary Tree
  - DFS
  - Tree
return: Done
---

# Problem: 515. Find Largest Value In Each Tree Row

## Description

## Approach / Thoughts
bfs level order

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def largestValues(self, root: Optional[TreeNode]) -> List[int]:
        if not root:
            return []

        res = []
        q = deque([root])
        while q:
            cur_max = float("-inf")
            for _ in range(len(q)):
                node = q.popleft()
                cur_max = max(cur_max, node.val)

                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
            res.append(cur_max)
        return res
```
