---
date: 2023-10-18
difficulty: Easy
num: 141
related_topics:
  - Hash Table
  - Linked List
  - Two-Pointer
return: Done
---

# Problem: 141. Linked List Cycle

## Description
To find if there was a cycle in the LL.

## Approach / Thoughts
My approach was to use a fast and a slow pointer. If there was a cycle in the LL, then the two pointers would eventually meet in the middle. However, if there wasn’t the fast pointer would eventually be None for its next object.

## Solution
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
				slow, fast = head, head 
				
				if head is None:
					return False
			
				while fast.next:
					if fast.next.next is None:
						return False

					fast = fast.next.next
					slow = slow.next
					
					if fast == slow:
						return True 
```
