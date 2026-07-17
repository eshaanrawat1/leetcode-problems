---
date: 2023-10-26
difficulty: Easy
num: 234
related_topics:
  - Linked List
  - Recursion
  - Stack
  - Two-Pointer
return: Done
---

# Problem: 234. Palindrome Linked List

## Description
To find whether or not a LL is palindromic.

## Approach / Thoughts
My approach was relatively simple. I iterated through the LL adding the values to a list. Then I returned whether the list is palindromic based on the built-in function in Python.

## Solution
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:

        node_vals = []

        curr = head

        while curr:
            node_vals.append(curr.val)
            curr = curr.next

        return node_vals == node_vals[::-1]
```
