---
date: 2025-01-21
difficulty: Medium
num: 1261
related_topics:
  - BFS
  - Binary Tree
  - DFS
  - Design
  - Hash Table
  - Tree
return: Done
---

# Problem: 1261. Find Elements In A Contaminated Binary Tree

## Description
same, value formula for binary tree index

## Approach / Thoughts
bfs add vals to set

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class FindElements:

    def __init__(self, root: Optional[TreeNode]):
        self.root = root
        self.seen = set()

        self.bfs()

    def bfs(self):
        q = deque([[self.root, 0]])
        while q:
            cur, val = q.popleft()
            self.seen.add(val)

            if cur.left:
                q.append([cur.left, 2 * val + 1])
            if cur.right:
                q.append([cur.right, 2 * val + 2])

    def find(self, target: int) -> bool:
        return target in self.seen


# Your FindElements object will be instantiated and called as such:
# obj = FindElements(root)
# param_1 = obj.find(target)
```
