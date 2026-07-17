---
date: 2024-06-11
difficulty: Medium
num: 61
related_topics:
  - Linked List
  - Two-Pointer
return: Done
---

# Problem: 61. Rotate List

## Description
rotate list by k places

## Approach / Thoughts
find mod and break point, rearrange pointers

## Solution
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if not head or not head.next or k == 0:
            return head
            
        # Find length
        length = 1
        tail = head
        while tail.next:
            tail=tail.next
            length += 1
            
        k %= length
        if k==0:
            return head

        count = length - k - 1
        current = head
        while count:
            current = current.next
            count -= 1
        new_head = current.next
        tail.next = head
        current.next = None  
        return new_head
```
