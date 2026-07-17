---
date: 2024-04-11
difficulty: Medium
num: 2
related_topics:
  - Linked List
  - Math
  - Recursion
return: Done
---

# Problem: 2. Add Two Numbers

## Description
Add two numbers

## Approach / Thoughts
Create new LL account for carry

## Solution
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = cur = ListNode()
        carry = 0

        while l1 or l2 or carry:
            v1 = l1.val if l1 else 0
            v2 = l2.val if l2 else 0 

            current_sum = v1 + v2 + carry
            carry = current_sum // 10
            current_sum %= 10

            cur.next = ListNode(current_sum)
            cur = cur.next

            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None
        return dummy.next
```
