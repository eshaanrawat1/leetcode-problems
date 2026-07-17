---
date: 2024-09-29
difficulty: Medium
num: 1381
related_topics:
  - Array
  - Design
  - Stack
return: Done
---

# Problem: 1381. Design A Stack With Increment Operation

## Description

## Approach / Thoughts
brute force

## Solution
```python
class CustomStack:

    def __init__(self, maxSize: int):
        self.stack = []
        self.sz = maxSize

    def push(self, x: int) -> None:
        if len(self.stack) == self.sz:
            return
        self.stack.append(x)

    def pop(self) -> int:
        return self.stack.pop() if self.stack else -1

    def increment(self, k: int, val: int) -> None:
        for i in range(min(len(self.stack), k)):
            self.stack[i] += val


# Your CustomStack object will be instantiated and called as such:
# obj = CustomStack(maxSize)
# obj.push(x)
# param_2 = obj.pop()
# obj.increment(k,val)
```
