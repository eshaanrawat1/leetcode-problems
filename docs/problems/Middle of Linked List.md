---
date: 2023-10-13
difficulty: Easy
num: 876
related_topics:
  - Linked List
  - Two-Pointer
return: Done
---

# Problem: 876. Middle Of Linked List

## Description
To find the middle node of a linked list. If the length of a linked list is even, return the second middle node. For example if LL is (1, 2, 3, 4): 3 should be returned.

## Approach / Thoughts
My approach was to use a two pointer approach. There are two different scenarios.

1: This is when the linked list has odd elements. In this case, we can increment the fast pointer by 2 and the slow pointer by 1. Since the fast pointer is moving twice as fast, when it reaches the end of LL, the slow pointer will be at the middle.

2: If the linked list has even elements. In this case, we still increment the fast pointer by 2 and run the loop while the next value of the fast pointer exists. However, if we reach the 2nd to last element, we have a conditional that will return slow + 1.

## Solution
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
			slow = head
			fast = head 

			while fast.next:
				if fast.next.next is None:
					return slow.next
				else:
					slow = slow.next
					fast = fast.next.next
			return slow
					
```
