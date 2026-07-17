---
date: 2024-02-28
difficulty: Medium
num: 1609
related_topics:
  - BFS
  - Binary Tree
  - Tree
return: Done
---

# Problem: 1609. Even Odd Tree

## Description
Find if tree is even-odd

On even indexed levels all values must be odd and strictly increase

Odd is opposite

## Approach / Thoughts
Use q to keep track of nodes

Have boolean to keep track of level parity whether even or odd

Keep track of previous node for each level, resetting at the end of each level

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isEvenOddTree(self, root: Optional[TreeNode]) -> bool:
        q = deque([root])
        is_even = True

        while q:
            prev = None
            for _ in range(len(q)):
                node = q.popleft()
                if is_even:
                    if node.val % 2 == 0: return False
                    if prev and node.val <= prev.val: return False
                else:
                    if node.val % 2 == 1: return False
                    if prev and node.val >= prev.val: return False
                if node.left: q.append(node.left)
                if node.right: q.append(node.right)
                prev = node
            is_even = not is_even
        return True
```
