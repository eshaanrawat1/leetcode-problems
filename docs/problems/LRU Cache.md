---
date: 2024-06-17
difficulty: Medium
num: 146
related_topics:
  - Design
  - Doubly-Linked List
  - Hash Table
  - Linked List
return: Review
---

# Problem: 146. Lru Cache

## Description
design lru cache

## Approach / Thoughts
doubly linked list with head and tail to keep track of most recent

check conditions and edge cases

## Solution
```python
class Node:
    def __init__(self, k, v, prev=None, next=None):
        self.k = k
        self.v = v
        self.prev = prev
        self.next = next

class LRUCache:
    def __init__(self, capacity: int):
        self.head = Node(0, 0)
        self.tail = Node(0, 0)

        self.head.next = self.tail
        self.tail.prev = self.head

        self.capacity = capacity
        self.current = 0

        self.cache = {}
        
    def _remove(self, node):
        node.prev.next = node.next
        node.next.prev = node.prev
    
    def _insert_right(self, node):
        self.tail.prev.next = node
        node.prev = self.tail.prev

        node.next = self.tail
        self.tail.prev = node

    def _evict_lru(self):
        to_remove = self.head.next.k
        del self.cache[to_remove]

        self.head.next = self.head.next.next
        self.head.next.prev = self.head

    def get(self, key: int) -> int:
        if key in self.cache:
            node = self.cache[key]
            self._remove(node)
            self._insert_right(node)
            return node.v
        return -1
        

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self._remove(self.cache[key])
            self.cache[key] = Node(key, value)
            self._insert_right(self.cache[key])
            return

        self.current += 1
        self.cache[key] = Node(key, value)
        self._insert_right(self.cache[key])

        if self.current > self.capacity:
            self._evict_lru()
            self.current -= 1

# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)
```
