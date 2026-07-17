---
date: 2026-05-14
difficulty: Medium
num: 1080
related_topics:
  - Tree
  - Depth-First Search
  - Binary Tree
return:
---

# Problem: 1080. Insufficient Nodes in Root to Leaf Paths

## Description
Given the `root` of a binary tree and an integer `limit`, delete all **insufficient nodes** in the tree simultaneously, and return *the root of the resulting binary tree*.

A node is **insufficient** if every root to **leaf** path intersecting this node has a sum strictly less than `limit`.

A **leaf** is a node with no children.

## Approach / Thoughts

two pass - identify delete cands and delete 

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sufficientSubset(self, root: Optional[TreeNode], limit: int):
        to_del = set()

        def dfs(root, cur_sum):
            if not root:
                return True

            if not root.left and not root.right:
                v = root.val + cur_sum
                if v < limit:
                    to_del.add(root)
                    return True
                return False

            l = dfs(root.left, cur_sum + root.val)
            r = dfs(root.right, cur_sum + root.val)

            if l and r:
                to_del.add(root)
                return True
            return False 
        dfs(root, 0)

        if root in to_del:
            return None

        def dfs2(root):
            if not root:
                return 

            if root.left and root.left in to_del:
                root.left = None
            
            if root.right and root.right in to_del:
                root.right = None

            dfs2(root.left)
            dfs2(root.right)
        
        dfs2(root)
        return root
        
        
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sufficientSubset(self, root: Optional[TreeNode], limit: int):

        def dfs(root, cur_sum):
            if not root:
                return None

            if not root.left and not root.right:
                v = root.val + cur_sum
                if v < limit:
                    return None
                return root

            l = dfs(root.left, cur_sum + root.val)
            r = dfs(root.right, cur_sum + root.val)

            root.left = l
            root.right = r

            if not l and not r:
                return None
            return root 

        return dfs(root, 0)


```