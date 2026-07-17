---
date: 2026-04-01
difficulty: Medium
num: 429
related_topics:
  - Tree
  - BFS
return:
---

# Problem:  

## Description
Given an n-ary tree, return the _level order_ traversal of its nodes' values.

_Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples)._

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
same

## Solution
```python
"""
# Definition for a Node.
class Node:
    def __init__(self, val: Optional[int] = None, children: Optional[List['Node']] = None):
        self.val = val
        self.children = children
"""

class Solution:
    def levelOrder(self, root: 'Node') -> List[List[int]]:
        res = []
        if not root:
            return []

        q = deque([root])
        while q:
            level = []
            for _ in range(len(q)):
                cur = q.popleft()
                for c in cur.children:
                    q.append(c)
                level.append(cur.val)
            res.append(level[:])
        return res