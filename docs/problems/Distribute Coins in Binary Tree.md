---
date: 2024-05-17
difficulty: Medium
num: 979
related_topics:
  - Binary Tree
  - DFS
  - Tree
return: Review
---

# Problem: 979. Distribute Coins In Binary Tree

## Description
make each node have 1 coin, count number of moves

## Approach / Thoughts
count difference at each step, starting from leaf

postorder dfs

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def distributeCoins(self, root: Optional[TreeNode]) -> int:
        self.res = 0
        def dfs(node):
            if not node:
                return [0, 0]
            
            l_size, l_coins = dfs(node.left)
            r_size, r_coins = dfs(node.right)

            size = 1 + l_size + r_size
            coins = node.val + l_coins + r_coins

            delta = abs(size - coins)
            self.res += delta

            return [size, coins]
        dfs(root)
        return self.res
```
