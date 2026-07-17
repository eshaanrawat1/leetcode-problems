---
date: 2026-01-14
difficulty: Hard
num: 1172
related_topics:
  - Design
  - Hash Table
  - Heap (Priority Queue)
  - Stack
return: Done
---

# Problem: 1172. Dinner Plate Stacks

## Description
same, infinite stacks push and pop to available

## Approach / Thoughts
dynamically increase stack of stacks size

two sorted sets for can push and can pop

## Solution
```python
# idea is have 2 sorted sets -> one for has space
# other for full (used for popping)
# basically keep track of which indices are free and
# add and subtract from sorted

from sortedcontainers import SortedSet

class DinnerPlates:

    def __init__(self, capacity: int):
        self.free = SortedSet(range(100))
        self.contains = SortedSet()

        self.capacity = capacity

        self.stacks = [[] for _ in range(100)]
        self.num_stacks = 100
        

    def push(self, val: int) -> None:
        if not self.free:
            self.stacks.append([])
            self.free.add(self.num_stacks)
            self.num_stacks += 1

        left = self.free[0]
        self.stacks[left].append(val)

        if len(self.stacks[left]) == self.capacity:
            self.free.remove(left)

        self.contains.add(left)

    def pop(self) -> int:
        if not self.contains:
            return -1 

        right = self.contains[-1]
        val = self.stacks[right].pop()

        if len(self.stacks[right]) == 0:
            self.contains.remove(right)
        
        self.free.add(right)
        return val

    def popAtStack(self, index: int) -> int:
        if index >= len(self.stacks) or len(self.stacks[index]) == 0:
            return -1 

        val = self.stacks[index].pop()

        if len(self.stacks[index]) == 0:
            self.contains.remove(index)
        
        self.free.add(index)
        return val


# Your DinnerPlates object will be instantiated and called as such:
# obj = DinnerPlates(capacity)
# obj.push(val)
# param_2 = obj.pop()
# param_3 = obj.popAtStack(index)
```
