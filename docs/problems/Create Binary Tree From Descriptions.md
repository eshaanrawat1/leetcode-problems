---
date: 2024-07-15
difficulty: Medium
num: 2196
related_topics:
  - Array
  - Binary Tree
  - Hash Table
  - Tree
return: Done
---

# Problem: 2196. Create Binary Tree From Descriptions

## Description

## Approach / Thoughts
store nodes in dict

build relation

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def createBinaryTree(self, descriptions: List[List[int]]) -> Optional[TreeNode]:
        nodes = {}
        parents, children = set(), set()

        for n1, n2, direction in descriptions:
            nodes[n1] = TreeNode(n1)
            nodes[n2] = TreeNode(n2)

            parents.add(n1)
            children.add(n2)

        for n1, n2, direction in descriptions:
            if direction == 1:
                nodes[n1].left = nodes[n2]
            else:
                nodes[n1].right = nodes[n2]

        return nodes[(parents-children).pop()]
```
