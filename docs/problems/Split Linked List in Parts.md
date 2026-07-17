---
date: 2024-06-17
difficulty: Medium
num: 725
related_topics:
  - Linked List
return: Done
---

# Problem: 725. Split Linked List In Parts

## Description
Split LL into k parts

## Approach / Thoughts
find number of parts with size and number with +1 with remainder

add head to each part and set none for next

## Solution
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def splitListToParts(self, head: Optional[ListNode], k: int) -> List[Optional[ListNode]]:
        cur = head
        size = 0
        while cur:
            cur = cur.next
            size += 1

        i = 0
        partition = size // k
        remainder = size % k

        res = [partition] * k
        while i < len(res) and remainder:
            res[i] += 1
            remainder -= 1
            i += 1
        
        cur_idx = 0
        ans = []
        cur = head
        prev = None
        while cur:
            i = 0
            ans.append(cur)
            while i < res[cur_idx]:
                i += 1
                prev = cur
                cur = cur.next
            prev.next = None
            cur_idx += 1
        
        while cur_idx < k:
            ans.append(None)
            cur_idx += 1

        return ans
```
