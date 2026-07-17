---
date: 2026-03-23
difficulty: Medium
num: 116
related_topics:
  - Linked List
  - Tree
  - DFS
  - BFS
  - Binary Tree
return:
---

# Problem:  

## Description
You are given a **perfect binary tree** where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

```C
struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
```

Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to `NULL`.

Initially, all next pointers are set to `NULL`.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
[[Tree]]

bfs level order 
dfs, preorder, use already connected nodes + perfect binary tree

## Solution
```python
# bfs
"""
# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
"""

class Solution:
    def connect(self, root: 'Optional[Node]') -> 'Optional[Node]':
        if not root:
            return None
            
        q = deque([root])

        while q:
            for _ in range(len(q)):
                cur = q.popleft()
                if cur.left: q.append(cur.left)
                if cur.right: q.append(cur.right)

            for i in range(len(q)-1):
                q[i].next = q[i+1]

        return root
 
# dfs       
"""
# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
"""

class Solution:
    def connect(self, root: 'Optional[Node]') -> 'Optional[Node]':
        
        def dfs(node):
            if not node:
                return 

            if node.left and node.right:
                node.left.next = node.right
                
                if node.next:
                    node.right.next = node.next.left
                
                dfs(node.left)
                dfs(node.right)
        
        dfs(root)
        return root
        
