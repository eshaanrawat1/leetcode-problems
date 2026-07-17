---
date: 2024-05-02
difficulty: Medium
num: 155
related_topics:
  - Design
  - Stack
return: Done
---

# Problem: 155. Min Stack

## Description
implement min stack with O(1) operations

## Approach / Thoughts
two stacks one for min and one normal

keep track of current min value

## Solution
```python
class MinStack:

    def __init__(self):
        self.stack = []
        self.min_stack = []

        self.min_val = float("inf")

    def push(self, val: int) -> None:
        cur_min = min(val, self.min_val)

        self.min_stack.append(cur_min)
        self.stack.append(val)
        
        self.min_val = cur_min

    def pop(self) -> None:
        self.stack.pop()
        self.min_stack.pop()

        self.min_val = self.min_stack[-1] if self.min_stack else float("inf")

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.min_val



# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()
```
