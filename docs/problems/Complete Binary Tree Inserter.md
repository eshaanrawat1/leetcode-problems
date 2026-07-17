---
date: 2026-04-17
difficulty: Medium
num: 919
related_topics:
  - Tree
  - BFS
  - Design
  - Binary Tree
return:
---

# Problem:  

## Description
A **complete binary tree** is a binary tree in which every level, except possibly the last, is completely filled, and all nodes are as far left as possible.

Design an algorithm to insert a new node to a complete binary tree keeping it complete after the insertion.

Implement the `CBTInserter` class:

- `CBTInserter(TreeNode root)` Initializes the data structure with the `root` of the complete binary tree.
- `int insert(int v)` Inserts a `TreeNode` into the tree with value `Node.val == val` so that the tree remains complete, and returns the value of the parent of the inserted `TreeNode`.
- `TreeNode get_root()` Returns the root node of the tree.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
q of leftmost candidate -> pick and pop

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class CBTInserter:

    def __init__(self, root: Optional[TreeNode]):
        self.root = root
        self.q = deque()
        self._bfs(root)

    def _bfs(self, node):
        q = deque([self.root])
        while q:
            cur = q.popleft()

            if not cur.left or not cur.right:
                self.q.append(cur)

            if cur.left:
                q.append(cur.left)
            if cur.right:
                q.append(cur.right)


    def insert(self, val: int) -> int:
        new_node = TreeNode(val)

        while self.q:
            cand = self.q[0]
            if cand.left and cand.right:
                self.q.popleft()
                continue

            if not cand.left:
                cand.left = new_node
            else:
                cand.right = new_node
                self.q.popleft()
            self.q.append(new_node)
            return cand.val


    def get_root(self) -> Optional[TreeNode]:
        return self.root


# Your CBTInserter object will be instantiated and called as such:
# obj = CBTInserter(root)
# param_1 = obj.insert(val)
# param_2 = obj.get_root()