---
date: 2024-09-09
difficulty: Medium
num: 2807
related_topics:
  - Linked List
  - Math
  - Number Theory
return: Done
---

# Problem: 2807. Insert Greatest Common Divisors In Linked List

## Description

## Approach / Thoughts
euclid gcd, linked list traversal

## Solution
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def insertGreatestCommonDivisors(self, head: Optional[ListNode]) -> Optional[ListNode]:
        
        def euclid(x, y):
            if x > y:
                x, y = y, x

            while x:
                y, x = x, y % x
            return y

        cur1, cur2 = head, head.next if head else None
        while cur1 and cur2:
            gcd = euclid(cur1.val, cur2.val)

            tmp = ListNode(gcd)
            cur1.next = tmp
            tmp.next = cur2

            cur1 = cur2
            cur2 = cur2.next
        return head
```
