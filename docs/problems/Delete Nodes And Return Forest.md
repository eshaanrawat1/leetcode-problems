---
date: 2024-07-17
difficulty: Medium
num: 1110
related_topics:
  - Array
  - Binary Tree
  - DFS
  - Hash Table
  - Tree
return: Review
---

# Problem: 1110. Delete Nodes And Return Forest

## Description
delete nodes with val and return roots

## Approach / Thoughts
bfs, check if each node has a parent, it does if the parent is not in deletions

for each node, if child is in deletions, reassign pointer after adding to q

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def delNodes(self, root: Optional[TreeNode], to_delete: List[int]) -> List[TreeNode]:
        res = []
        deletions = set(to_delete)

        q = deque([[root, False]])
        while q:
            node, parent = q.popleft()

            if node.val not in deletions and not parent:
                res.append(node)
            
            if node.left:
                q.append([node.left, node.val not in deletions])
                if node.left.val in deletions:
                    node.left = None
            if node.right:
                q.append([node.right, node.val not in deletions])
                if node.right.val in deletions:
                    node.right = None
        return res
```
