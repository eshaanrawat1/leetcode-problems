---
date: 2024-08-23
difficulty: Hard
num: 297
related_topics:
  - BFS
  - Binary Tree
  - DFS
  - Design
  - String
  - Tree
return: Done
---

# Problem: 297. Serialize And Deserialize Binary Tree

## Description

## Approach / Thoughts
easier to parse with tuple, but convert to string and add to q

have root, keep going left if there is a node, otherwise go x

## Solution
```python
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Codec:

    def serialize(self, root):
        if not root:
            return 'x'
        return ','.join((str(root.val), self.serialize(root.left), self.serialize(root.right)))
        

    def deserialize(self, data):
        self.q = deque()
        self.q.extend(data.split(','))

        return self.deser_helper()
        
    def deser_helper(self):
        if not self.q or self.q[0] == 'x':
            self.q.popleft()
            return None

        root = TreeNode(self.q.popleft())
        root.left = self.deser_helper()
        root.right = self.deser_helper()

        return root
        

# Your Codec object will be instantiated and called as such:
# ser = Codec()
# deser = Codec()
# ans = deser.deserialize(ser.serialize(root))
```
