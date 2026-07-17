---
date: 2026-03-23
difficulty: Medium
num: 117
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
Given a binary tree

```c
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
layer jumps with root next pointer
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
    def connect(self, root: 'Node') -> 'Node':
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
        
# layer jumps
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
    def connect(self, root: 'Node') -> 'Node':
        node = root
        while node:
            dummy = cur = Node()
            while node:
                if node.left:
                    cur.next = node.left
                    cur = cur.next
                
                if node.right:
                    cur.next = node.right
                    cur = cur.next

                node = node.next
            node = dummy.next
        return root