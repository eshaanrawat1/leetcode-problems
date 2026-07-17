---
date: 2026-04-20
difficulty: Medium
num: 971
related_topics:
  - Tree
  - DFS
  - Binary Tree
return:
---

# Problem:  

## Description
You are given the `root` of a binary tree with `n` nodes, where each node is uniquely assigned a value from `1` to `n`. You are also given a sequence of `n` values `voyage`, which is the **desired** [**pre-order traversal**](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order) of the binary tree.

Any node in the binary tree can be **flipped** by swapping its left and right subtrees. For example, flipping node 1 will have the following effect:

![](https://assets.leetcode.com/uploads/2021/02/15/fliptree.jpg)

Flip the **smallest** number of nodes so that the **pre-order traversal** of the tree **matches** `voyage`.

Return _a list of the values of all **flipped** nodes. You may return the answer in **any order**. If it is **impossible** to flip the nodes in the tree to make the pre-order traversal match_ `voyage`_, return the list_ `[-1]`.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
at each root do we flip children, global preorder state

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def flipMatchVoyage(self, root: Optional[TreeNode], voyage: List[int]):
        if not root:
            return [-1] if voyage else []

        voyage = deque(voyage)

        flips = []
        def dfs(root):
            if not root or not voyage:
                return True

            if (root.val and not voyage) or (root.val != voyage[0]):
                return False

            voyage.popleft()
            if not root.left and not root.right:
                return True
            
            if root.left and root.left.val != voyage[0]:
                flips.append(root.val)
                return dfs(root.right) and dfs(root.left)

            return dfs(root.left) and dfs(root.right)

        return flips if dfs(root) else [-1]
               