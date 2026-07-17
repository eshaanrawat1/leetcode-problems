---
date: 2024-09-06
difficulty: Medium
num: 1367
related_topics:
  - BFS
  - Binary Tree
  - DFS
  - Linked List
  - Tree
return: Done
---

# Problem: 1367. Linked List In Binary Tree

## Description

## Approach / Thoughts
check node in tree and ll at same time

reset if miss a link

## Solution
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSubPath(self, head: Optional[ListNode], root: Optional[TreeNode]) -> bool:
        @cache
        def dfs(root, node):
            if not node:
                return True
            if not root:
                return False
                
            if root.val == node.val:
                return any(
                    [dfs(root.left, node.next),
                    dfs(root.right, node.next),
                    dfs(root.left, head),
                    dfs(root.right, head)]
                )
            else:
                return any(
                    [dfs(root.left, head),
                    dfs(root.right, head)]
                )

        return dfs(root, head)
```
