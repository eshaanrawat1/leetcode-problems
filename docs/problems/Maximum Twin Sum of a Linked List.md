---
date: 2024-04-07
difficulty: Medium
num: 2130
related_topics:
  - Linked List
  - Stack
  - Two-Pointer
return: Done
---

# Problem: 2130. Maximum Twin Sum Of A Linked List

## Description
Palindrome pairs of a LL, max sum

## Approach / Thoughts
Reverse second half of LL

## Solution
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def pairSum(self, head: Optional[ListNode]) -> int:
        slow = fast = head
        prev = ListNode(-1, head)
        idx = 0

        # find middle of LL
        while fast and fast.next:
            prev = prev.next
            slow = slow.next
            fast = fast.next.next
            idx += 1

        # reverse LL 
        while slow:
            temp = slow.next
            slow.next = prev
            prev = slow
            slow = temp

        # Find max twin sum
        ans = float("-inf")
        pointer = head
        i = 0
        while i < idx:
            cur_sum = pointer.val + prev.val
            ans = max(cur_sum, ans)
            pointer = pointer.next
            prev = prev.next
            i += 1
        return ans
```
