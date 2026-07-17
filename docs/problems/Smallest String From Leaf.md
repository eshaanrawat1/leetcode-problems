---
date: 2024-04-13
difficulty: Medium
num: 968
related_topics:
  - Binary Tree
  - DFS
  - String
  - Tree
return: Done
---

# Problem: 968. Smallest String From Leaf

## Description
Smallest string from leaf to root in that order

## Approach / Thoughts
Keep track of all leaf to root strings, find min

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def smallestFromLeaf(self, root: Optional[TreeNode]) -> str:
        if root and not root.left and not root.right: return chr(root.val+97)

        res = []
        def dfs(node, cur_str):
            if not node: return
            if not node.left and not node.right:
                cur_str += chr(node.val+97)
                res.append(cur_str[::-1])
                return
            
            ch = chr(node.val+97)
            dfs(node.left, cur_str + ch)
            dfs(node.right, cur_str + ch)
        
        dfs(root, "")
        return min(res)
```
