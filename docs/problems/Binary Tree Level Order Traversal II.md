---
date: 2024-04-05
difficulty: Medium
num: 107
related_topics:
  - BFS
  - Binary Tree
  - Tree
return: Done
---

# Problem: 107. Binary Tree Level Order Traversal Ii

## Description
Level order traverse backwards

## Approach / Thoughts
```Python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrderBottom(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root: return []
        res = [[root.val]]
        q = deque([root])

        while q:
            temp = []
            for i in range(len(q)):
                node = q.popleft()
                if node.left:
                    q.append(node.left)
                    temp.append(node.left.val)
                if node.right:
                    q.append(node.right)
                    temp.append(node.right.val)
            if temp:
                res.append(temp)
        return res[::-1]
```

## Solution
