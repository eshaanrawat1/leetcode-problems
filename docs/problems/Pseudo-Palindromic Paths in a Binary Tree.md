---
date: 2024-07-07
difficulty: Medium
num: 1457
related_topics:
  - BFS
  - Binary Tree
  - Bit Manipulation
  - DFS
  - Tree
return: Done
---

# Problem: 1457. Pseudo Palindromic Paths In A Binary Tree

## Description

## Approach / Thoughts
keep dict of counts, check if palindrome

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pseudoPalindromicPaths (self, root: Optional[TreeNode]) -> int:
        self.total = 0

        counts = defaultdict(int)
        def dfs(node):
            if not node:
                return

            counts[node.val] += 1
            if not node.left and not node.right:
                if self.palindrome(counts): self.total += 1
            
            dfs(node.left)
            dfs(node.right)

            counts[node.val] -= 1 

        dfs(root)
        return self.total

    def palindrome(self, freq):
        odds = 0
        for k, v in freq.items():
            if v % 2 == 1:
                odds += 1
        return odds <= 1
```
