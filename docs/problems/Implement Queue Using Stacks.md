---
date: 2024-01-28
difficulty: Easy
num: 232
related_topics:
  - Design
  - Queue
  - Stack
return: Done
---

# Problem: 232. Implement Queue Using Stacks

## Description
Same as title

## Approach / Thoughts
Use one stack

## Solution
```python
class MyQueue:

    def __init__(self):
        self.stack = []
        

    def push(self, x: int) -> None:
        self.stack.append(x)
        

    def pop(self) -> int:
        if not self.stack:
            return

        value = self.stack[0]
        if len(self.stack) == 1:
            self.stack = []
        else:
            self.stack = self.stack[1:]
        return value

    
    def peek(self) -> int:
        return self.stack[0]
        

    def empty(self) -> bool:
        return not self.stack


# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()
```
