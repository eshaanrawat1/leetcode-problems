---
date: 2023-10-21
difficulty: Easy
num: 206
related_topics:
  - Linked List
  - Recursion
return: Done
---

# Problem: 206. Reverse Linked List

## Description
To reverse a linked list.

## Approach / Thoughts
We have a prev var initially set to None. We store our curr next in a temporary variable and basically assign our curr next to whatever our prev variable is and our prev becomes our curr. Then we keep iterating until the loop runs out. When that happens, prev becomes the new head.

## Solution
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev, curr = None, head 

        while curr:
            temp = curr.next 
            curr.next = prev
            prev = curr
            curr = temp

        return prev
```
