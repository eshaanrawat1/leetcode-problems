---
date: 2024-03-06
difficulty: Medium
num: 1302
related_topics:
  - BFS
  - Binary Tree
  - DFS
  - Tree
return: Done
---

# Problem: 1302. Deepest Leaves Sum

## Description
Find sum of all leaves at the deepest level

## Approach / Thoughts
BFS keeping track of max depth in a dict

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def deepestLeavesSum(self, root: Optional[TreeNode]) -> int:
        res = collections.defaultdict(list)
        res[0].append(root.val)
        q = deque([(root, 0)])

        while q:
            for i in range(len(q)):
                node, depth = q.popleft()
                if node.left:
                    q.append((node.left, depth+1))
                    res[depth+1].append(node.left.val)
                if node.right:
                    q.append((node.right, depth+1))
                    res[depth+1].append(node.right.val)
        
        max_depth = max(res)
        return sum(res[max_depth])
```
