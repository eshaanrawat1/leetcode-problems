---
date: 2024-07-04
difficulty: Easy
num: 108
related_topics:
  - Array
  - Binary Search
  - Divide and Conquer
  - Tree
return: Done
---

# Problem: 108. Convert Sorted Array To Binary Search Tree

## Description

## Approach / Thoughts
recursive binary search

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
        def bst(l, r):
            if l > r:
                return None
            
            m = (l + r) // 2

            cur = TreeNode(nums[m])
            cur.left = bst(l, m-1)
            cur.right = bst(m+1, r)

            return cur
        return bst(0, len(nums)-1)
```
