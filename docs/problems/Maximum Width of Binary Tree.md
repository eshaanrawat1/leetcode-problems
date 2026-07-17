---
date: 2024-07-07
difficulty: Medium
num: 662
related_topics:
  - BFS
  - Binary Tree
  - DFS
  - Tree
return: Done
---

# Problem: 662. Maximum Width Of Binary Tree

## Description

## Approach / Thoughts
left index 2n, right 2n+1, keep track and find max diff

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def widthOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        res = 1
        q = deque([[root, 1]])
        while q:
            cur_min, cur_max = float("inf"), float("-inf")
            for _ in range(len(q)):
                node, index = q.popleft()
                
                cur_min = min(cur_min, index)
                cur_max = max(cur_max, index)
                
                if node.left:
                    q.append([node.left, 2 * index])   
                if node.right:
                    q.append([node.right, 2 * index + 1])

            if cur_min != cur_max:
                res = max(res, abs(cur_max - cur_min + 1))
        return res
```
