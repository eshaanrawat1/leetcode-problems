---
date: 2025-02-08
difficulty: Medium
num: 2349
related_topics:
  - Design
  - Hash Table
  - Heap (Priority Queue)
  - Ordered Set
return: Done
---

# Problem: 2349. Design A Number Container System

## Description
same, numbers with indices

## Approach / Thoughts
sorted set for indices, dict for index to numbers

## Solution
```python
from sortedcontainers import SortedSet

class NumberContainers:

    def __init__(self):
        self.numbers = {}
        self.d = defaultdict(SortedSet)

    def change(self, index: int, number: int) -> None:
        if index not in self.numbers:
            self.numbers[index] = number
            self.d[number].add(index)
        else:
            old_num = self.numbers[index]
            self.d[old_num].remove(index)

            self.numbers[index] = number
            self.d[number].add(index)

    def find(self, number: int) -> int:
        return self.d[number][0] if self.d[number] else -1


# Your NumberContainers object will be instantiated and called as such:
# obj = NumberContainers()
# obj.change(index,number)
# param_2 = obj.find(number)
```
