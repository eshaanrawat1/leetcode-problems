---
date: 2024-04-08
difficulty: Medium
num: 143
related_topics:
  - Linked List
  - Recursion
  - Stack
  - Two-Pointer
return: Done
---

# Problem: 143. Reorder List

## Description
Reorder list in place like 1 → n-1 → 2 → n-2 and so on

## Approach / Thoughts
1. Find middle of list (make pointer middle.next)

1. Reverse second half of the list

1. Merge halves

## Solution
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        """
        Do not return anything, modify head in-place instead.
        """
        # Find middle
        slow, fast = head, head.next
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        # Reverse second half
        second = slow.next
        prev = slow.next = None
        while second:
            tmp = second.next
            second.next = prev
            prev = second
            second = tmp

        # Merge halves
        first, second = head, prev
        while second:
            tmp1, tmp2 = first.next, second.next

            first.next = second
            second.next = tmp1

            first, second = tmp1, tmp2
        
```
