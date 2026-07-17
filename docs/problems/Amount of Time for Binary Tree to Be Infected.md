---
date: 2024-12-17
difficulty: Medium
num: 2385
related_topics:
  - BFS
  - Binary Tree
  - DFS
  - Hash Table
  - Tree
return: Done
---

# Problem: 2385. Amount Of Time For Binary Tree To Be Infected

## Description

## Approach / Thoughts
convert to graph bfs

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def amountOfTime(self, root: Optional[TreeNode], start: int) -> int:
        adj = defaultdict(list)

        def dfs(node):
            if not node:
                return 

            if node.left:
                adj[node.val].append(node.left.val)
                adj[node.left.val].append(node.val)
            if node.right:
                adj[node.val].append(node.right.val)
                adj[node.right.val].append(node.val)

            dfs(node.left)
            dfs(node.right)
        dfs(root)
        
        q = deque([[start, 0]])
        mt = -inf
        visit = {start}


        while q:
            cur, time = q.popleft()
            mt = max(time, mt)

            for nei in adj[cur]:
                if nei not in visit:
                    visit.add(nei)
                    q.append([nei, time + 1])
        return mt
```
