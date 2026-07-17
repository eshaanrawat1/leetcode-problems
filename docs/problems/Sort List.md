---
date: 2025-11-29
difficulty: Medium
num: 148
related_topics:
  - Divide and Conquer
  - Linked List
  - Merge Sort
  - Sorting
  - Two-Pointer
return: Done
---

# Problem: 148. Sort List

## Description
same, sort linked list

## Approach / Thoughts
merge sort, use fast and slow pointer to find split

## Solution
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        
        def merge_list(a, b):
            dummy = cur = ListNode(-1)
            while a and b:
                if a.val <= b.val:
                    cur.next = a
                    a = a.next
                else:
                    cur.next = b
                    b = b.next
                cur = cur.next

            if a: cur.next = a
            if b: cur.next = b
            return dummy.next
        
        def merge(head):
            if not head:
                return None 

            if head and not head.next:
                return head

            prev = slow = fast = head
            while fast and fast.next:
                prev = slow
                slow = slow.next
                fast = fast.next.next

            prev.next = None
            l = merge(head)
            r = merge(slow)
            return merge_list(l, r)

        return merge(head)
            
```
