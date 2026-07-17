---
date: 2026-01-01
difficulty: Easy
num: 705
related_topics:
  - Array
  - Design
  - Hash Table
  - Linked List
return: Done
---

# Problem: 705. Design Hashset

## Description

## Approach / Thoughts
chained hash mod buckets linked list

## Solution
```python
class Node:
    def __init__(self, val):
        self.val = val
        self.nxt = None

class LL:
    def __init__(self):
        self.head = None
        self.tail = None

    def insert(self, val):
        nxt = Node(val)
        if not self.head:
            self.head = self.tail = nxt
            return 

        self.tail.nxt = nxt
        self.tail = nxt 

    def remove(self, val):
        cur = self.head 
        prv = None

        if self.head.val == val:
            self.head = self.head.nxt
            return 

        while cur:
            if cur.val == val:
                if cur == self.tail:
                    self.tail = prv
                    prv.nxt = None
                    return 
                prv.nxt = cur.nxt 
                return

            prv = cur
            cur = cur.nxt

    def contains(self, val):
        cur = self.head
        while cur:
            if cur.val == val:
                return True
            cur = cur.nxt
        return False

class MyHashSet:

    def __init__(self):
        self.store = [LL() for _ in range(500)]

    def add(self, key: int) -> None:
        if self.contains(key):
            return 

        mod = key % 500
        self.store[mod].insert(key)

    def remove(self, key: int) -> None:
        if not self.contains(key):
            return 

        mod = key % 500
        self.store[mod].remove(key)

    def contains(self, key: int) -> bool:
        mod = key % 500
        return self.store[mod].contains(key)


# Your MyHashSet object will be instantiated and called as such:
# obj = MyHashSet()
# obj.add(key)
# obj.remove(key)
# param_3 = obj.contains(key)
```
