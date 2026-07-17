---
date: 2024-07-16
difficulty: Medium
num: 2096
related_topics:
  - Binary Tree
  - DFS
  - String
  - Tree
return: Done
---

# Problem: 2096. Step By Step Directions From A Binary Tree Node To Another

## Description

## Approach / Thoughts
get all possible directions, bfs from start node to end

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def getDirections(self, root: Optional[TreeNode], startValue: int, destValue: int) -> str:
        q = deque([])
        
        directions = defaultdict(list)
        def dfs(node, prev):
            if not node:
                return

            if node.val == startValue:
                q.append([node, ''])

            if prev:
                directions[node].append(['U', prev])

            if node.left:
                directions[node].append(['L', node.left])
            if node.right:
                directions[node].append(['R', node.right])
            
            dfs(node.left, node)
            dfs(node.right, node)
        dfs(root, None)

        visit = set()
        while q:
            cur, path = q.popleft()

            if cur.val == destValue:
                return path

            if cur in visit:
                continue
            
            visit.add(cur)

            for direc, node in directions[cur]:
                q.append([node, path + direc])
```
