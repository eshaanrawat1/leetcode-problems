---
date: 2024-04-05
difficulty: Easy
num: 637
related_topics:
  - BFS
  - Binary Tree
  - DFS
  - Tree
return: Done
---

# Problem: 637. Average Of Levels In Binary Tree

## Description
Same as problem

## Approach / Thoughts
BFS, add averages to result array

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def averageOfLevels(self, root: Optional[TreeNode]) -> List[float]:
        res = [float(root.val)]
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
                res.append(sum(temp) / len(temp))
        return res
```
