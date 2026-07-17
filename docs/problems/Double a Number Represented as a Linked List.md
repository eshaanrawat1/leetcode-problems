---
date: 2024-05-06
difficulty: Medium
num: 2816
related_topics:
  - Linked List
  - Math
  - Stack
return: Done
---

# Problem: 2816. Double A Number Represented As A Linked List

## Description
Double a number make new LL

## Approach / Thoughts
reverse and use no stack O(1) space

stack and use vals

## Solution
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def doubleIt(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # reverse LL to account for carries
        cur = head
        prev = None
        while cur:
            nxt = cur.next
            cur.next = prev
            prev = cur
            cur = nxt

        # add nodes and create new LL 
        carry = 0
        last = None
        while prev or carry:
            val = prev.val + prev.val if prev else 0
            digits_place = val % 10

            cur = ListNode(digits_place + carry, last)
            last = cur
            prev = prev.next if prev else None

            carry = val // 10
        return last
```
