---
date: 2026-04-09
difficulty: Medium
num: 863
related_topics:
  - Senior Staff
  - Hash Table
  - Tree
  - DFS
  - BFS
  - Binary Tree
return:
---

# Problem:  

## Description
Given the `root` of a binary tree, the value of a target node `target`, and an integer `k`, return _an array of the values of all nodes that have a distance_ `k` _from the target node._

You can return the answer in **any order**

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
convert to graph + bfs

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def distanceK(self, root: TreeNode, target: TreeNode, k: int) -> List[int]:
        adj = defaultdict(list)

        def dfs(root, par):
            if root:
                if par != -1:
                    adj[root.val].append(par.val)
                    adj[par.val].append(root.val)
                
                dfs(root.left, root)
                dfs(root.right, root)
        dfs(root, -1)

        q = deque([target.val])
        vis = {target.val}

        for _ in range(k):
            for _ in range(len(q)):
                cur = q.popleft()
                for nei in adj[cur]:
                    if nei not in vis:
                        vis.add(nei)
                        q.append(nei)
        return list(q)
