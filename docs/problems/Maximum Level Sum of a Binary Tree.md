---
date: 2024-06-24
difficulty: Medium
num: 1161
related_topics:
  - BFS
  - Binary Tree
  - DFS
  - Tree
return: Done
---

# Problem: 1161. Maximum Level Sum Of A Binary Tree

## Description

## Approach / Thoughts
level order keep track of sum

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxLevelSum(self, root: Optional[TreeNode]) -> int:
        max_sum = float("-inf")
        max_level = 0

        cur_level = 1
        q = deque([root])
        while q:
            cur_sum = 0
            
            for _ in range(len(q)):
                node = q.popleft()
                cur_sum += node.val

                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
            
            if cur_sum > max_sum:
                max_sum = cur_sum
                max_level = cur_level
            cur_level += 1
        return max_level
```
