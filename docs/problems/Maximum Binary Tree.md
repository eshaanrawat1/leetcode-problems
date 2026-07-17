---
date: 2024-07-07
difficulty: Medium
num: 654
related_topics:
  - Array
  - Binary Tree
  - Divide and Conquer
  - Monotonic Stack
  - Stack
  - Tree
return: Done
---

# Problem: 654. Maximum Binary Tree

## Description

## Approach / Thoughts
recursive, find max and make tree

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def constructMaximumBinaryTree(self, nums: List[int]) -> Optional[TreeNode]:
        def dfs(nums):
            if not nums:
                return None
            
            cur_max = index = -1
            for i, n in enumerate(nums):
                if n > cur_max:
                    index = i
                    cur_max = n
            
            root = TreeNode(cur_max)
            root.left = dfs(nums[:index])
            root.right = dfs(nums[index+1:])

            return root
        return dfs(nums)
```
