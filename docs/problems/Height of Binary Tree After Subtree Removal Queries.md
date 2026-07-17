---
date: 2024-10-25
difficulty: Hard
num: 2458
related_topics:
  - Array
  - BFS
  - Binary Tree
  - DFS
  - Tree
return: Review
---

# Problem: 2458. Height Of Binary Tree After Subtree Removal Queries

## Description

## Approach / Thoughts
group by depth and height

after removal find others with same height and get depth

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def treeQueries(self, root: Optional[TreeNode], queries: List[int]) -> List[int]:
        heights = defaultdict(list)
        depths = defaultdict(int)

        def dfs(root, height):
            if not root:
                return 0

            left = 1 + dfs(root.left, height + 1)
            right = 1 + dfs(root.right, height + 1)

            depths[root.val] = max(0, left, right)
            heights[root.val] = height
            return depths[root.val]

        dfs(root, 0)  
        for node in depths:
            depths[node] -= 1

        cousins = defaultdict(list)
        for val, depth in depths.items():
            level = heights[val]
            cousins[level].append((depth, val))

            cousins[level].sort(reverse=True)
            if len(cousins[level]) > 2:
                cousins[level].pop()

        res = []
        for q in queries:
            level = heights[q]

            if len(cousins[level]) == 1:
                res.append(level - 1)
            else:
                if cousins[level][0][1] == q:
                    res.append(cousins[level][1][0] + level)
                else:
                    res.append(cousins[level][0][0] + level)
        return res
```
