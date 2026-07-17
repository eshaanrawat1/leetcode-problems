---
date: 2026-04-01
difficulty: Medium
num: 449
related_topics:
  - String
  - Tree
  - DFS
  - BFS
  - Design
  - BST
  - Binary Tree
return:
---

# Problem:  

## Description
Serialization is converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a **binary search tree**. There is no restriction on how your serialization/deserialization algorithm should work. You need to ensure that a binary search tree can be serialized to a string, and this string can be deserialized to the original tree structure.

**The encoded string should be as compact as possible.**

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
same preorder serialize - don't need to track null
use upper and lower bound to fill

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Codec:

    def serialize(self, root: Optional[TreeNode]) -> str:
        """Encodes a tree to a single string.
        """
        res = []
        def dfs(root):
            if not root:
                return
            
            res.append(str(root.val))
            dfs(root.left)
            dfs(root.right)
        dfs(root)
        return ' '.join(res)
        

    def deserialize(self, data: str) -> Optional[TreeNode]:
        """Decodes your encoded data to tree.
        """
        q = deque(data.split(' '))

        def build(lo, hi):
            if not q or q[0] == '':
                return None

            val = int(q[0])  
            if not (lo <= val <= hi):
                return None

            root = TreeNode(int(q.popleft()))
            root.left = build(lo, val)
            root.right = build(val, hi)
            return root

        return build(-inf, inf)

# Your Codec object will be instantiated and called as such:
# Your Codec object will be instantiated and called as such:
# ser = Codec()
# deser = Codec()
# tree = ser.serialize(root)
# ans = deser.deserialize(tree)
# return ans