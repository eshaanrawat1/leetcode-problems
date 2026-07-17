---
date: 2024-06-13
difficulty: Medium
num: 445
related_topics:
  - Linked List
  - Math
  - Stack
return: Done
---

# Problem: 445. Add Two Numbers Ii

## Description
add two numbers forward linked list

## Approach / Thoughts
iterate check edge cases

## Solution
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        l1_size = self.findSize(l1)
        l2_size = self.findSize(l2)

        while l1_size < l2_size:
            tmp = ListNode(0, l1)
            l1 = tmp
            l1_size += 1
        while l2_size < l1_size:
            tmp = ListNode(0, l2)
            l2 = tmp
            l2_size += 1
        
        dummy = prev = ListNode(0)
        top, bot = l1, l2

        while top and bot:
            cur_sum = top.val + bot.val
            carry = cur_sum // 10
            cur_sum %= 10

            if carry:
                prev.val += 1
            
            tmp = ListNode(cur_sum)
            prev.next = tmp
            prev = prev.next

            top = top.next
            bot = bot.next
        self.checkCarry(dummy)
        return dummy.next if not dummy.val else dummy
        
    def checkCarry(self, l):
        stack = []
        cur = l
        while cur:
            tmp = cur
            while tmp.val >= 10:
                tmp.val %= 10
                tmp = stack.pop()
                tmp.val += 1
            stack.append(cur)
            cur = cur.next


    def findSize(self, l):
        length = 0
        cur = l
        while cur:
            cur = cur.next
            length += 1
        return length
```
