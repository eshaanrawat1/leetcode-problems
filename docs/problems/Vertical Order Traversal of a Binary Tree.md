---
date: 2024-08-23
difficulty: Hard
num: 987
related_topics:
  - BFS
  - Binary Tree
  - DFS
  - Hash Table
  - Sorting
  - Tree
return: Done
---

# Problem: 987. Vertical Order Traversal Of A Binary Tree

## Description

## Approach / Thoughts
bfs, add row num and val, use val for tiebreaks

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def verticalTraversal(self, root: Optional[TreeNode]) -> List[List[int]]:
        positions = defaultdict(list)

        q = deque([[root, 0, 0]])
        while q:
            cur, x, y = q.popleft()
            positions[y].append((x, cur.val))

            if cur.left:
                q.append([cur.left, x+1, y-1])
            if cur.right:
                q.append([cur.right, x+1, y+1])

        res = []
        for p in sorted(positions):
            positions[p].sort(key=lambda x:(x[0], x[1]))
            res.append(i[1] for i in positions[p])
        return res
```
