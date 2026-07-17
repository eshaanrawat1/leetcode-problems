---
date: 2026-04-09
difficulty: Medium
num: 889
related_topics:
  - Staff
  - Array
  - Hash Table
  - Divide and Conquer
  - Tree
  - Binary Tree
return:
---

# Problem:  

## Description
Given two integer arrays, `preorder` and `postorder` where `preorder` is the preorder traversal of a binary tree of **distinct** values and `postorder` is the postorder traversal of the same tree, reconstruct and return _the binary tree_.

If there exist multiple answers, you can **return any** of them.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
build from left right, next root marks the end boundary in postorder

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def constructFromPrePost(self, preorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
        
        pre = deque(preorder)
        postmap = {x:i for i,x in enumerate(postorder)}

        def dfs(l, r):
            if not pre or l > r:
                return None

            val = pre.popleft()
            root = TreeNode(val)

            if not pre or l == r:
                return root

            idx = postmap[pre[0]]
            root.left = dfs(l, idx)
            root.right = dfs(idx+1, r-1)
            return root

        return dfs(0, len(preorder)-1)