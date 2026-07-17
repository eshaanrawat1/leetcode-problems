---
date: 2023-10-23
difficulty: Easy
num: 160
related_topics:
  - Hash Table
  - Linked List
  - Two-Pointer
return: Done
---

# Problem: 160. Intersection Of Two Linked Lists

## Description
To return the node where two linked lists intersected or return none if no intersection.

## Approach / Thoughts
My approach was to use a hashset and two pointers to visit each node and add it to the hashset. If a node was already present, then we just return that node. Otherwise we keep traversing and if we reach the end, then just return None.

## Solution
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:

        node_set = set()

        a_point, b_point = headA, headB

        while True:
            if a_point == b_point:
                return a_point
    
            if a_point:
                if a_point not in node_set:
                    node_set.add(a_point)
                else:
                    return a_point
                a_point = a_point.next 
            
            if b_point:
                if b_point not in node_set:
                    node_set.add(b_point)
                else:
                    return b_point
                b_point = b_point.next 

            if not a_point and not b_point:
                return None
```
