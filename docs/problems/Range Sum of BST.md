---
date: 2024-01-07
difficulty: Easy
num: 938
related_topics:
  - BST
  - Binary Tree
  - DFS
  - Tree
return: Done
---

# Problem: 938. Range Sum Of Bst

## Description
Sum all the values in a BST between a certain constraint, inclusive. Return the sum

## Approach / Thoughts
Use an iterative dfs to iterate through the tree, using a stack to keep track of nodes

- add all values to a total that fit the criteria

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rangeSumBST(self, root: Optional[TreeNode], low: int, high: int) -> int:
        total = 0
        stack = []
        curr = root

        while curr or stack:
            while curr:
                total += curr.val if low <= curr.val <= high else 0
                stack.append(curr)
                curr = curr.left
            curr = stack.pop()
            curr = curr.right
        return total
```
