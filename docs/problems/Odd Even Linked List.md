---
date: 2024-06-11
difficulty: Medium
num: 328
related_topics:
  - Linked List
return: Done
---

# Problem: 328. Odd Even Linked List

## Description
change indices of nodes

## Approach / Thoughts
chain odds then chain evens, check bounds

## Solution
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def oddEvenList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
            return None

        odd = head
        even = even_head = head.next

        while even and even.next:
            odd.next = odd.next.next
            even.next = even.next.next

            odd = odd.next
            even = even.next

        odd.next = even_head
        return head
```
