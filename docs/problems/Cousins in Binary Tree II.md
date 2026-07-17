---
date: 2024-10-22
difficulty: Medium
num: 2641
related_topics:
  - BFS
  - Binary Tree
  - DFS
  - Hash Table
  - Tree
return: Done
---

# Problem: 2641. Cousins In Binary Tree Ii

## Description

## Approach / Thoughts
scuffed traversals and keep track of sum

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def replaceValueInTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        level_sum = []
        q = deque([root])
        root.par = None

        while q:
            cur_sum = 0
            for _ in range(len(q)):
                node = q.popleft()
                cur_sum += node.val

                if node.left:
                    q.append(node.left)
                    node.left.par = node
                if node.right:
                    q.append(node.right)
                    node.right.par = node
            level_sum.append(cur_sum)

        cur_level = 0
        q = deque([root])

        node_to_val = {root:0}

        while q:
            for _ in range(len(q)):
                node = q.popleft()

                l = node.par.left.val if node.par and node.par.left else 0
                r = node.par.right.val if node.par and node.par.right else 0

                node_to_val[node] = level_sum[cur_level] - (l + r)

                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)

            cur_level += 1
        
        def dfs(root):
            if not root:
                return 
            
            root.val = node_to_val[root]
            dfs(root.left)
            dfs(root.right)
        dfs(root)
        root.val = 0
        return root
```
