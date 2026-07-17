---
date: 2025-12-03
difficulty: Medium
num: 622
related_topics:
  - Array
  - Design
  - Linked List
  - Queue
return: Done
---

# Problem: 622. Design Circular Queue

## Description

## Approach / Thoughts
head tail check mods

## Solution
```python
class MyCircularQueue:

    def __init__(self, k: int):
        self.head = 0
        self.tail = 0
        self.q = [-1] * k
        self.k = k

    def enQueue(self, value: int) -> bool:
        self.tail %= self.k
        if not self.isFull():
            self.q[self.tail] = value
            self.tail += 1
            self.tail %= self.k
            return True
        return False
        

    def deQueue(self) -> bool:
        self.head %= self.k
        if not self.isEmpty():
            self.q[self.head] = -1
            self.head += 1
            self.head %= self.k
            return True
        return False

    def Front(self) -> int:
        return self.q[self.head]

    def Rear(self) -> int:
        return self.q[self.tail-1]

    def isEmpty(self) -> bool:
        return self.q[self.head] == -1

    def isFull(self) -> bool:
        return self.q[self.tail] != -1


# Your MyCircularQueue object will be instantiated and called as such:
# obj = MyCircularQueue(k)
# param_1 = obj.enQueue(value)
# param_2 = obj.deQueue()
# param_3 = obj.Front()
# param_4 = obj.Rear()
# param_5 = obj.isEmpty()
# param_6 = obj.isFull()
```
