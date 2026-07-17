---
date: 2026-03-22
difficulty: Medium
num: 109
related_topics:
  - Linked List
  - Divide and Conquer
  - Tree
  - BST
  - Binary Tree
return:
---

# Problem:  

## Description
Given the `head` of a singly linked list where elements are sorted in **ascending order**, convert _it to a_ **_height-balanced_** _binary search tree_.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
[[Tree]]

same, store in list

## Solution
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sortedListToBST(self, head: Optional[ListNode]) -> Optional[TreeNode]:
        
        cur = head
        nums = []

        while cur:
            nums.append(cur.val)
            cur = cur.next

        def dfs(l, r):
            if l > r:
                return None

            m = (l + r) // 2

            root = TreeNode(nums[m])
            root.left = dfs(l, m-1)
            root.right = dfs(m+1, r)
            return root
        return dfs(0, len(nums)-1)