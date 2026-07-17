---
date: 2023-10-27
difficulty: Easy
num: 21
related_topics:
  - Linked List
  - Recursion
return: Done
---

# Problem: 21. Merge Two Sorted Lists

## Description
To merge together two sorted linked lists.

## Approach / Thoughts
My approach was to use a two pass approach. First, I would created a dummy node and add values as next to that dummy LL.

Pass 1 uses two pointers to create a new sorted list while we have not completed one LL.

Pass 2 checks if one LL is bigger than the other, if so it just keeps appending values after traversing through it.

## Solution
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:

        merged_head = ListNode(-1)
        current = merged_head

        while list1 and list2:

            if list1.val < list2.val:
                merged_head.next = list1
                list1 = list1.next
            else:
                merged_head.next = list2
                list2 = list2.next 
            merged_head = merged_head.next

        if list1:
            while list1:
                merged_head.next = list1
                list1 = list1.next
                merged_head = merged_head.next

        if list2:
            while list2:
                merged_head.next = list2
                list2 = list2.next
                merged_head = merged_head.next

        return current.next
```
