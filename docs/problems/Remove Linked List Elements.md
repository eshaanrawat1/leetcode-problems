---
date: 2023-11-05
difficulty: Easy
num: 203
related_topics:
  - Linked List
  - Recursion
return: Done
---

# Problem: 203. Remove Linked List Elements

## Description
To remove values in a LL if the value of the node matched val.

## Approach / Thoughts
My approach was to initialize a dummy node prev, the current node, and a nxt node. If the current node val is the same as val, then we set prev to next and don’t increment prev to skip the node entirely.

This also accounts for the edge cases of head and tail node removal.

## Solution
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
        
        dummy = ListNode(next=head)
        prev, curr = dummy, head 

        while curr:
            nxt = curr.next
            if curr.val == val:
                prev.next = nxt
            else:
                prev = curr
            curr = nxt
        return dummy.next
```
