---
date: 2024-12-28
difficulty: Medium
num: 508
related_topics:
  - Binary Tree
  - DFS
  - Hash Table
  - Tree
return: Done
---

# Problem: 508. Most Frequent Subtree Sum

## Description

## Approach / Thoughts
postorder return sum of all below

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findFrequentTreeSum(self, root: Optional[TreeNode]) -> List[int]:
        cnt = Counter()

        def dfs(node):
            if not node:
                return 0

            l = dfs(node.left)
            r = dfs(node.right)
            v = node.val

            cnt[l + v + r] += 1
            return l + v + r
        
        dfs(root)

        max_freq = max(cnt.values())
        return [k for k,v in cnt.items() if v == max_freq]
```
