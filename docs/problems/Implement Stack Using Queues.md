---
date: 2024-05-02
difficulty: Easy
num: 225
related_topics:
  - Design
  - Queue
  - Stack
return: Done
---

# Problem: 225. Implement Stack Using Queues

## Description
Stack using q

## Approach / Thoughts
Have push be O(n) use q and pop and append

## Solution
```python
class MyStack:

    def __init__(self):
        self.q = deque([])

    def push(self, x: int) -> None:
        self.q.append(x)

    def pop(self) -> int:
        for i in range(len(self.q)-1):
            self.q.append(self.q.popleft())
        return self.q.popleft()

    def top(self) -> int:
        node = self.pop()
        self.q.append(node)
        return node

    def empty(self) -> bool:
        return not self.q


# Your MyStack object will be instantiated and called as such:
# obj = MyStack()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.top()
# param_4 = obj.empty()
```
